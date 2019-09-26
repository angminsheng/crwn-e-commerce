import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropDown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { currentUserSelector } from "../../redux/user/user.selectors";
import { cartDisplaySelector } from "../../redux/cart/cart.selector";
import "./Header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <>
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
          <CartIcon />
        </>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartDisplaySelector
});

export default connect(mapStateToProps)(Header);
