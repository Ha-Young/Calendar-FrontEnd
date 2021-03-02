import React from "react";
import { Link } from "react-router-dom";
import HeaderBtn from "../../../shared/HeaderBtn";

const Today = () => {
  return (
    <Link to="/daily">
      <HeaderBtn>
        <p>Today</p>
      </HeaderBtn>
    </Link>
  );
}

export default Today;
