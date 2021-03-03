import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Button from "../../../shared/ArrowBtn";
import { PAGE_TYPE } from "../../../reducers";


const LeftArrowButton = ({ prevDay, prevWeek, page }) => {
  const handleClick = () => {
    if (page === PAGE_TYPE.DAILY) {
      prevDay();

      return;
    }
    
    prevWeek();
  };

  return (
    <Button onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Button>
  );
};

export default LeftArrowButton;
