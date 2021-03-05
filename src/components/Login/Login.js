import React from "react";
import Button from "./Button";

export default function Login({ onClickLogin, auth }) {
  const { isLoggedIn } = auth;
  const buttonText = isLoggedIn ? "LOG OUT" : "LOG IN";
  return (
    <Button
      onClick={() => onClickLogin(isLoggedIn)}
      text={buttonText}
    />
  );
}
