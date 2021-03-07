import React, { useState } from "react";
import { authService, firebaseInstance } from "api/firebaseService";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewAccount, setIsNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (isNewAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setIsNewAccount((value) => !value);
  };

  const handleSocialClick = async (event) => {
    try {
      const {
        target: { name },
      } = event;
      let provider;

      if (name === "google") {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === "github") {
        provider = new firebaseInstance.auth.GithubAuthProvider();
      }

      await authService.signInWithPopup(provider);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>
        CALENDER <br />
        VIEWER
      </h1>
      <form onSubmit={onSubmit} className={styles.loginInput}>
        <input
          className={styles.loginInputEmail}
          name="email"
          type="text"
          placeholder="Email"
          onChange={onChange}
          required
          value={email}
        />
        <input
          className={styles.loginInputPassword}
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
          required
          value={password}
        />
        <button className={styles.loginButton}>
          {isNewAccount ? "Create Account" : "Log In"}
        </button>
        {error !== "" && <span className={styles.erroMessage}>{error}</span>}
      </form>
      <button onClick={toggleAccount} className={styles.loginToggleButton}>
        {isNewAccount ? "Sign in" : "Create Account"}
      </button>
      <div className={styles.socialLoginContainer}>
        <button
          name="google"
          onClick={handleSocialClick}
          className={styles.loginByGoogle}
        >
          Continue with Google
        </button>
        <button
          name="github"
          onClick={handleSocialClick}
          className={styles.loginByGithub}
        >
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
