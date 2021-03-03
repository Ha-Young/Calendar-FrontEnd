import React from "react";
import { Link } from "react-router-dom";
import HeaderBtn from "../../../shared/HeaderBtn";

const Today = ({ resetDay }) => {
  return (
    <Link to="/daily">
      <HeaderBtn onClick={resetDay}>
        <p>Today</p>
      </HeaderBtn>
    </Link>
  );
};

export default Today;
