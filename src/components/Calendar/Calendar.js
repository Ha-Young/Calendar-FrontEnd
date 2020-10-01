import React, { useEffect } from 'react';
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
import Timeline from '../Timeline/Timeline';
import CalendarField from '../CalendarField/CalendarField';

import {
  VIEW_MODES,
  VIEW_MODES_LIST,
} from '../../constants/calendar.constants';
import CustomButton from '../CustomButton/CustomButton';

const Calendar = ({
  currentViewMode,
  date,
  setCurrentViewMode,
  setDate,
  moveToPrevPage,
  moveToNextPage,
}) => {
  const setDateToday = () => {
    const today = moment().startOf('day');
    setDate(today);
  };

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
          {moment(date).format('YYYY년 M월 D일')}
        </div>
        <div className='view-modes'>
          {currentViewMode &&
            VIEW_MODES_LIST.map(viewMode => (
              <CustomButton
                key={viewMode.gap}
                onClick={() => setCurrentViewMode(viewMode)}
                selected={viewMode.title === currentViewMode.title}
              >
                {viewMode.title}
              </CustomButton>
            ))}
        </div>
      </div>
      <div className='content'>
        <Timeline />
        <CalendarField viewMode={currentViewMode} date={date} />
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
