import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const Button = styled.button`
  width: 2em;
  height: 2em;
`;

const LeftArrowButton = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Button>
  );
}

export default LeftArrowButton;
