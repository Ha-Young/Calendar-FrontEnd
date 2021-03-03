import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faUser } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2em;
  width: 4em;
  height: 100%;
  font-size: 1.2em;
  margin-right: 1.5em;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
    height: 2.2em;
    border-radius: 50%;

    &:hover {
      background-color: #EEEEEE;
      cursor: pointer;
    }
  }
`;

const ICON_STYLE = {
  SIZE: "lg",
  COLOR: "#ABABAB",
};

const User = () => {
  return (
    <Wrapper>
      <div>
        <FontAwesomeIcon icon={faTh} size={ICON_STYLE.SIZE} color={ICON_STYLE.COLOR} />
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} size={ICON_STYLE.SIZE} color={ICON_STYLE.COLOR} />
      </div>
    </Wrapper>
  );
};

export default User;
