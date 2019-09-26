import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase";

const SignIn = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e.message);
    }

    setEmail("");
    setPassword("");
  };

  const handleChange = e => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <span>sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          name="email"
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          label="password"
          handleChange={handleChange}
        />
        <div className="button-container">
          <CustomButton onClick={handleSubmit}>Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
