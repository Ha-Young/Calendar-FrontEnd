import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Button from "../../../shared/ArrowBtn";

const LeftArrowButton = ({ prevDay }) => {
  return (
    <Button onClick={prevDay}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Button>
  );
};

export default LeftArrowButton;
