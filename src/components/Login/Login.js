import React from "react";

export default function Login({ onClickLogin, isLoggedIn }) {
  const buttonText = isLoggedIn ? "LOG OUT" : "LOG IN";
  return (
    <button
      onClick={() => onClickLogin(isLoggedIn)}
    >
      {buttonText}
    </button>
  );
}
