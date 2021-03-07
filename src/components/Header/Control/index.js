import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RightArrowButton from "./RightArrowButton";
import LeftArrowButton from "./LeftArrowButton";
import Today from "./Today";
import Nav from "./Nav";

const HeaderControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20em;
`;

const Control = ({
  currentPage,
  prevDay,
  nextDay,
  prevWeek,
  nextWeek,
  resetDay,
  day,
  week,
}) => {
  return (
    <HeaderControl>
      <Today resetDay={resetDay} page={currentPage} />
      <div>
        <LeftArrowButton prevDay={prevDay} prevWeek={prevWeek} page={currentPage} />
        <RightArrowButton nextDay={nextDay} nextWeek={nextWeek} page={currentPage} />
      </div>
      <Nav day={day} week={week} page={currentPage} />
    </HeaderControl>
  );
};

export default Control;

Control.propTypes = {
  currentPage: PropTypes.string.isRequired,
  prevDay: PropTypes.func.isRequired,
  nextDay: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  nextWeek: PropTypes.func.isRequired,
  resetDay: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  week: PropTypes.number.isRequired,
};
