import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignUp.scss";
import { auth, createUserProfile } from "../../firebase/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      setEmail("");
      setDisplayName("");
      setPassword("");
      setConfirmPassword("");

      await createUserProfile(user, displayName);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = e => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      case "displayName":
        setDisplayName(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sign-up">
      <h2>I do not have an account.</h2>
      <span>sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="displayName"
          value={displayName}
          name="displayName"
          label="display name"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          value={email}
          name="email"
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          label="password"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          label="comfirm password"
          handleChange={handleChange}
          required
        />
        <CustomButton handleClick={handleSubmit}>Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
