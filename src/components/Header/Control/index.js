import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import RightArrowButton from "./RightArrowButton";
import LeftArrowButton from "./LeftArrowButton";
import Today from "./Today";
import Nav from "./Nav";
import {
  movePrevDay,
  moveNextDay,
  movePrevWeek,
  moveNextWeek,
  resetDay,
} from "../../../actions";

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

const mapStateToProps = (state) => ({
  currentPage: state.calendar.currentPage,
  day: state.calendar.countOfDay,
  week: state.calendar.countOfWeek,
});

const mapDispatchToProps = (dispatch) => ({
  prevDay: () => {
    dispatch(movePrevDay());
  },
  nextDay: () => {
    dispatch(moveNextDay());
  },
  prevWeek: () => {
    dispatch(movePrevWeek());
  },
  nextWeek: () => {
    dispatch(moveNextWeek());
  },
  resetDay: () => {
    dispatch(resetDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Control);
