import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import WeeklyCalendar from '../components/WeeklyCalendar';
import ControlBar from '../components/ControlBar';
import DateBox from '../components/DateBox';
import {
  toggleWeeklyAndDaily,
  moveNextDay,
  movePrevDay,
} from '../actions';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid ${({ theme }) => theme.gray};

    div {
      display: flex;
      width: 200px;
      justify-content: center;
      padding-top: 20px;
      border-bottom: 2px solid ${({ theme }) => theme.gray};
      padding: 20px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60%;

    .status-bar {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 20px;
    }

    .calendar {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
    }
  }
`;

function CalendarContainer({
  isWeekly,
  currentDate,
  eventData,
  toggleWeeklyAndDaily,
  moveNextDay,
  movePrevDay,
}) {
  return (
    <Container>
      <Navigation events={eventData}/>
      <section>
        <ControlBar
          onToggle={toggleWeeklyAndDaily}
          date={currentDate}
          movePrev={movePrevDay}
          moveNext={moveNextDay}
          isWeekly={isWeekly}
        />
        {
          isWeekly ?
            <WeeklyCalendar
              currentDate={currentDate}
              eventData={eventData}
            />
          :
            <DateBox date={currentDate} eventData={eventData}/>
        }
      </section>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    isWeekly: state.isWeekly,
    currentDate: state.currentDate,
    eventData: state.eventData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleWeeklyAndDaily() {
      dispatch(toggleWeeklyAndDaily());
    },
    moveNextDay(count) {
      dispatch(moveNextDay(count));
    },
    movePrevDay(count) {
      dispatch(movePrevDay(count));
    },
  };
}

CalendarContainer.propTypes = {
  isWeekly: PropTypes.bool.isRequired,
  currentDate: PropTypes.object.isRequired,
  eventData: PropTypes.object,
  toggleWeeklyAndDaily: PropTypes.func.isRequired,
  moveNextDay: PropTypes.func.isRequired,
  movePrevDay: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
