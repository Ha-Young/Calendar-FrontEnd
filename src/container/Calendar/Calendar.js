import React, { useEffect, useCallback } from 'react';
import moment from 'moment';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { connect } from 'react-redux';

import {
  setCurrentViewMode,
  setDate,
  moveToNextPage,
  moveToPrevPage,
} from '../../redux/calendar/calendar.actions';

import './Calendar.scss';
import Timeline from '../../components/Timeline/Timeline';
import EventsField from '../../components/EventsField/EventsField';

import {
  VIEW_MODES,
  VIEW_MODES_LIST,
} from '../../constants/calendar.constants';
import CustomButton from '../../components/CustomButton/CustomButton';

const Calendar = ({
  currentViewMode,
  date,
  setCurrentViewMode,
  setDate,
  moveToPrevPage,
  moveToNextPage,
}) => {
  const setDateToday = useCallback(() => {
    const today = moment().startOf('day');
    setDate(today);
  }, [setDate]);

  const getTitle = useCallback(() => {
    if (currentViewMode.title === VIEW_MODES.DAILY.title) {
      return moment(date).format('YYYY년 M월 D일');
    }
    if (currentViewMode.title === VIEW_MODES.WEEKLY.title) {
      return `${moment(date).weeks()} 번째 주`;
    }
  }, [date]);

  useEffect(() => {
    setCurrentViewMode(VIEW_MODES.WEEKLY);
    setDateToday();
  }, []);

  return (
    <div className='calendar-container'>
      <div className='navigation'>
        <div className='today'>
          <CustomButton onClick={setDateToday}>Today</CustomButton>
        </div>
        <div className='current'>
          <FcPrevious size={24} onClick={moveToPrevPage} />
          <FcNext size={24} onClick={moveToNextPage} />
          {getTitle()}
        </div>
        <div className='view-modes'>
          {currentViewMode &&
            VIEW_MODES_LIST.map(viewMode => (
              <CustomButton
                key={viewMode.gap}
                onClick={() => setCurrentViewMode(viewMode)}
                selected={viewMode.title === currentViewMode.title}
              >
                {viewMode.title.toUpperCase()}
              </CustomButton>
            ))}
        </div>
      </div>
      <div className='content'>
        <Timeline />
        <EventsField viewMode={currentViewMode} date={date} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ calendar }) => ({
  currentViewMode: calendar.currentViewMode,
  date: calendar.date,
});

const mapDispatchToProps = dispatch => ({
  setCurrentViewMode: viewMode => dispatch(setCurrentViewMode(viewMode)),
  setDate: date => dispatch(setDate(date)),
  moveToPrevPage: date => dispatch(moveToPrevPage(date)),
  moveToNextPage: date => dispatch(moveToNextPage(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
