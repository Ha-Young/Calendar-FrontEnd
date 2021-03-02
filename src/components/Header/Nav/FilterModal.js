import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position absolute;
  padding: 0.5em;
  margin-top: 0.5em;
  width: 8em;
  height: 10em;
  background-color: #EEEEEE;
  border: 0.1em solid gray;

  li {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
`;

const FilterModal = () => {
  return (
    <Wrapper>
      <ul>
        <li><Link to="/weekly">weekly</Link></li>
        <li><Link to="/daily">daily</Link></li>
      </ul>
    </Wrapper>
  );
}

export default FilterModal;
