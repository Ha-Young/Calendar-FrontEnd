import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../../shared/ArrowBtn";

const RightArrowButton = ({ nextDay }) => {
  return (
    <Button onClick={nextDay}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  );
};

export default RightArrowButton;
