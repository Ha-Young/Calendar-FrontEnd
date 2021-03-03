import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../../shared/ArrowBtn";
import { PAGE_TYPE } from "../../../reducers";

const RightArrowButton = ({ nextDay, nextWeek, page }) => {
  const handleClick = () => {
    if (page === PAGE_TYPE.WEEKLY) {
      nextWeek();

      return;
    }
    
    nextDay();
  };

  return (
    <Button onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  );
};

export default RightArrowButton;