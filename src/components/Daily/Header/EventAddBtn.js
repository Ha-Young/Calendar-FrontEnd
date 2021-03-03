import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  width: 2em;
  height: 2em;
  margin-right: 2em;
  font-size: 1.5em;
  color: #ABABAB;
  border-radius: 50%;
  border: 0.1em solid #ABABAB;
`;

const EventAddBtn = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faPlus}/>
    </Button>
  );
};

export default EventAddBtn;
