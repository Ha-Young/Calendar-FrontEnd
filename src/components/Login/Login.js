import React from "react";
import Button from "./Button";

export default function Login({ onClickLogin, isLoggedIn }) {
  const buttonText = isLoggedIn ? "LOG OUT" : "LOG IN";
  return (
    <Button
      onClick={() => onClickLogin(isLoggedIn)}
      text={buttonText}
    />
  );
}
