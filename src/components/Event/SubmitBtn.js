import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  right: 50%;
  margin-top: 3em;
`;

const SubmitBtn = () => {
  return (
    <Button type="submit">
      <p>Save</p>
    </Button>
  );
};

export default SubmitBtn;
