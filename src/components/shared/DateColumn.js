import React from "react";

export default function ({ fullDate }) {
  const date = new Date(fullDate).getDate();
  return (
    <li id={fullDate}>
      {date}
    </li>
  );
}
