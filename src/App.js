import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { auth, createUserProfile } from "./firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { currentUserSelector } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    let authState = auth.onAuthStateChanged(async user => {
      if (user) {
        let userRef = await createUserProfile(user);
        userRef.onSnapshot(userSnapshot => {
          setCurrentUser({
            id: userSnapshot.id,
            ...userSnapshot.data()
          });
        });
      } else setCurrentUser(user);
    });

    return () => {
      authState.unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <SignInSignUpPage />;
          }}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
