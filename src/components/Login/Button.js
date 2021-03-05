import React from "react";

export default function Button({ onClick, isLoggedIn}) {
  const buttonText = isLoggedIn ? "LOG OUT" : "LOG IN";
  return (
    <button onClick={() => onClick(isLoggedIn)}>
      {buttonText}
    </button>
  );
}
