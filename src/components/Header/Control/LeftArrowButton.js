import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Button from "../../../shared/ArrowBtn";
import { PAGE_TYPE } from "../../../reducers/calendar";


const LeftArrowButton = ({ prevDay, prevWeek, page }) => {
  const handleClick = () => {
    if (page === PAGE_TYPE.DAY) {
      prevDay();
      
      return;
    }
    
    if (page === PAGE_TYPE.WEEK) {
      prevWeek();
    }
  };

  return (
    <Button onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Button>
  );
};

export default LeftArrowButton;
