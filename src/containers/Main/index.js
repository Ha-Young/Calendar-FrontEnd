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
import renderSchedules from '../../utils/renderSchedules';
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
        incrementDate(date);
        break;
      case 'weekly':
        incrementWeek();
    }
  }

  function handlePrevClick (e) {
    switch (timespan) {
      case 'daily':
        decrementDate(date);
        break;
      case 'weekly':
        decrementWeek();
    }
  }

  return(
    <Styled.Main>
      {
        timespan !== ''
        && <button id="prev" onClick={handlePrevClick}>
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
        timespan !== ''
        && <button id="next" onClick={handleNextClick}>
          {'>'}
        </button>
      }

      <Styled.CalendarContainer>
        <Route path='/main/daily/'>
          <Daily
            date={date}
            scheduleDatas={schedules.byId}
            renderSchedules={renderSchedules}
            updateTimespan={v => setTimespan(v)}
          />
        </Route>
        <Route path='/main/weekly/'>
          <Weekly
            week={week}
            scheduleDatas={schedules.byId}
            renderSchedules={renderSchedules}
            updateTimespan={v => setTimespan(v)}
          />
        </Route>
        <Route path='/main/:timespan/:scheduleId'>
          <Modal />
        </Route>
      </Styled.CalendarContainer>
    </Styled.Main>);
}

const mapStateToProps = (state) => {
  return {
    week: state.utils.week,
    date: state.utils.date,
    timespan: state.utils.timespan,
    schedules: state.schedules
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
    incrementDate (date) {
      dispatch(incrementDateAction(date));
    },
    decrementDate (date) {
      dispatch(decrementDateAction(date));
    },
    incrementWeek (week) {
      dispatch(incrementWeekAction(week));
    },
    decrementWeek (week) {
      dispatch(decrementWeekAction(week));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
