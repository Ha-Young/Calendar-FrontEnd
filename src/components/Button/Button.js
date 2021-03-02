import React from "react";

const Button = function ({ className, children, onClick }) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
