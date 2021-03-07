import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PAGE_TYPE } from "../../../reducers/calendar";
import HeaderBtn from "../../../shared/HeaderBtn";

const Today = ({ resetDay, page }) => {
  const link = page === PAGE_TYPE.DAY ? "/Day" : "/Week";

  return (
    <Link to={link}>
      <HeaderBtn onClick={resetDay}>
        <p>Today</p>
      </HeaderBtn>
    </Link>
  );
};

export default Today;

Today.propTypes = {
  page: PropTypes.string.isRequired,
  resetDay: PropTypes.func.isRequired,
};
