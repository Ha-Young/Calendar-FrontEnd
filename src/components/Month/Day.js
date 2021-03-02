import React from "react";

export default function Day({ day, children }) {
  return (
    <li>
      {day}
      {children}
    </li>
  );
}