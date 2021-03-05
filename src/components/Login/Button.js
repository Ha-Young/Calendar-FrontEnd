import React from "react";

export default function Button({ onClick, isLoggedIn}) {
  const buttonText = isLoggedIn ? "LOG OUT" : "LOG IN";
  return (
    <button 
      styles={{backgroundColor: "#4B70E2"}}
      onClick={() => onClick(isLoggedIn)}>
      {buttonText}
    </button>
  );
}
