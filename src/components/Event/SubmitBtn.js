import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  right: 50%;
  margin-top: 2em;
  font-size: 1.5em;
  border-radius: 10%;
`;

const SubmitBtn = () => {
  return (
    <Button type="submit">
      <p>Save</p>
    </Button>
  );
};

export default SubmitBtn;
