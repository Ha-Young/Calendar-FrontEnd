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
  z-index: 99;

  li {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
`;

const FilterModal = () => {
  return (
    <Wrapper>
      <ul>
        <li><Link to="/Day">Day</Link></li>
        <li><Link to="/Week">Week</Link></li>
        <li><Link to="/Event/new">Event</Link></li>
      </ul>
    </Wrapper>
  );
};

export default FilterModal;
