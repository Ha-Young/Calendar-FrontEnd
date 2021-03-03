import React from "react";
import styled from "styled-components";
import { PAGE_TYPE } from "../../../reducers";
import { getMonth, getYear } from "../../../utils/getDay";

const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 2.5em;
  padding: 0.2em;

  p {
    font-size: 1.4em;
    margin-right: 0.2em;
  }

  &:hover {
    background-color: #EEEEEE;
    cursor: pointer;
  }
`;

const Nav = ({ day, week, page }) => {
  const month = page === PAGE_TYPE.DAILY ? getMonth(day) : getMonth(week);
  const year = page === PAGE_TYPE.DAILY ? getYear(day) : getYear(week);
  return (
    <HeaderNav>
      <p>{month}</p>
      <p>{year}</p>
    </HeaderNav>
  );
};

export default Nav;
