import React from "react";
import PropTypes from "prop-types";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../../shared/ArrowBtn";
import { PAGE_TYPE } from "../../../reducers/calendar";

const RightArrowButton = ({ nextDay, nextWeek, page }) => {
  const handleClick = () => {
    if (page === PAGE_TYPE.DAY) {
      nextDay();

      return;
    }

    if (page === PAGE_TYPE.WEEK) {
      nextWeek();
    }
  };

  return (
    <Button onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  );
};

export default RightArrowButton;

RightArrowButton.propTypes = {
  page: PropTypes.string.isRequired,
  nextDay: PropTypes.func.isRequired,
  nextWeek: PropTypes.func.isRequired,
};
