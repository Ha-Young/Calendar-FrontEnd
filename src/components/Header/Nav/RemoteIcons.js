import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8em;
  height: 100%;
  font-size: 1.2em;
  margin-right: 1.5em;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2em;
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

const RemoteIcons = () => {
  return (
    <Wrapper>
      <div>
        <FontAwesomeIcon icon={faSearch} size={ICON_STYLE.SIZE} color={ICON_STYLE.COLOR} />
      </div>
      <div>
        <FontAwesomeIcon icon={faQuestionCircle} size={ICON_STYLE.SIZE} color={ICON_STYLE.COLOR} />
      </div>
      <div>
        <FontAwesomeIcon icon={faCog} size={ICON_STYLE.SIZE} color={ICON_STYLE.COLOR} />
      </div>
    </Wrapper>
  );
}

export default RemoteIcons;
