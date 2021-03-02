import React from "react";
import styled from "styled-components";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = styled.button`
  width: 2em;
  height: 2em;
`;

const RightArrowButton = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  );
}

export default RightArrowButton;
