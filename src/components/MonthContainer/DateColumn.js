import React from "react";

export default function DateColumn({ fullDate, children}) {
  const date = new Date(fullDate).getDate();
  return (
    <li id={fullDate}>
      {date}
      {children}
    </li>
  );
}
