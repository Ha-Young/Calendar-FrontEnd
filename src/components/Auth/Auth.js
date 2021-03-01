import React, { useState } from "react";
import { createUser, sigIn, GoogleProvider, sigInWithProvider } from "../../api/index";
//이거 나중에 redux state로 manage 가능하다싶으면 분리시켜야됨

const Auth = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewAccount, setIsNewAccuount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { target: { name, value } } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (isNewAccount) {
      createUser(email, password, setError);
    } else {
      sigIn(email, password, setError);
    }
  };

  const toggleAccount = () => {
    setIsNewAccuount(prev => !prev);
  };

  const onSocialClick = (event) => {
    const { target: { name } } = event;
    let provider;

    if (name === "google-button") {
      provider = GoogleProvider(setError);
    }

    sigInWithProvider(provider, setError);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          autoComplete="on"
        />
        <input type="submit" value="Log In" />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {isNewAccount ? "Create Account" : "Sign In"}
      </span>
      <div>
        <button name="google-button" onClick={onSocialClick}>Continue with Google</button>
      </div>
    </div>
  );
};

export default Auth;
