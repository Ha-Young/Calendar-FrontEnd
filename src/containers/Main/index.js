import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Daily from '../../components/Daily';
import Weekly from '../../components/Weekly';
import Modal from '../../components/Modal';
import { schedule } from '../../utils/api';
import {
  receiveSchedules,
  setTimespanAction,
  incrementDateAction,
  decrementDateAction,
  incrementWeekAction,
  decrementWeekAction } from '../../actions';
import * as Styled from '../../components/styled';

function Main ({
  onLoad,
  schedules,
  timespan,
  setTimespan,
  date,
  incrementDate,
  decrementDate,
  week,
  incrementWeek,
  decrementWeek }) {

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  function handleNextClick (e) {
    switch (timespan) {
      case 'daily':
        incrementDate();
        break;
      case 'weekly':
        incrementWeek();
    }
  }

  function handlePrevClick (e) {
    switch (timespan) {
      case 'daily':
        decrementDate();
        break;
      case 'weekly':
        decrementWeek();
    }
  }

  return (
    <Styled.Main>
      {
        timespan !== '' &&
        <button id="prev" onClick={handlePrevClick}>
          {'<'}
        </button>
      }
      <Link to='/main/daily'>
        <button>일간</button>
      </Link>
      <Link to='/main/weekly'>
        <button>주간</button>
      </Link>
      {
        timespan !== '' &&
        <button id="next" onClick={handleNextClick}>
          {'>'}
        </button>
      }

      <Styled.CalendarContainer>
        <Route path='/main/daily/'>
          <Daily
            date={date}
            scheduleDatas={schedules.byId}
            updateTimespan={v => setTimespan(v)}
          />
        </Route>
        <Route path='/main/weekly/'>
          <Weekly
            week={week}
            scheduleDatas={schedules.byId}
            updateTimespan={v => setTimespan(v)}
          />
        </Route>
        <Route path='/main/:timespan/:scheduleId'>
          <Modal />
        </Route>
      </Styled.CalendarContainer>
    </Styled.Main>
  );
}

const mapStateToProps = ({ utils: { week, date }, schedules }) => {
  return {
    week,
    date,
    timespan,
    schedules
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad () {
      schedule.getSchedules(schedules => dispatch(receiveSchedules(schedules)));
    },
    setTimespan(timespan){
      dispatch(setTimespanAction(timespan));
    },
    incrementDate () {
      dispatch(incrementDateAction());
    },
    decrementDate () {
      dispatch(decrementDateAction());
    },
    incrementWeek () {
      dispatch(incrementWeekAction());
    },
    decrementWeek () {
      dispatch(decrementWeekAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
