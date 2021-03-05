import React from "react";
import Button from "./Button";

export default function Login({ onClickLogin, auth }) {
  const { isLoggedIn } = auth;

  return (
    <Button
      onClick={onClickLogin}
      isLoggedIn={isLoggedIn}
    />
  );
}
