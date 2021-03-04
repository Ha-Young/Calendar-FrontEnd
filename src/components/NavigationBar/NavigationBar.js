import React from "react";
import { hours } from "../../utils/date";

const NavigationBar = () => {
  return (
    <>
      {hours.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default NavigationBar;
