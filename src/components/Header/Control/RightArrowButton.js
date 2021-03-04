import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../../shared/ArrowBtn";
import { PAGE_TYPE } from "../../../reducers/calendar";

const RightArrowButton = ({ nextDay, nextWeek, page }) => {
  const handleClick = () => {
    if (page === PAGE_TYPE.DAILY) {
      nextDay();
      
      return;
    }
    
    nextWeek();
  };

  return (
    <Button onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  );
};

export default RightArrowButton;
