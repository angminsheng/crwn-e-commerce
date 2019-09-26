import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./SignInSignUpPage.scss";

const SignInSignUpPage = () => {
  return (
    <div className="form-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
