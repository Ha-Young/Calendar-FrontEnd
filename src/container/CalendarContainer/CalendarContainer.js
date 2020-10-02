import React, { useEffect, useCallback } from 'react';
import moment from 'moment';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { connect } from 'react-redux';

import {
  setCurrentViewMode,
  setBaseDate,
  setDatesShown,
  setEventLists,
  moveToNextPage,
  moveToPrevPage,
} from '../../redux/calendar/calendar.actions';

import './CalendarContainer.scss';
import Timeline from '../../components/Timeline/Timeline';
import DailyColumn from '../../components/DailyColumn/DailyColumn';

import {
  VIEW_MODES,
  VIEW_MODES_LIST,
} from '../../constants/calendar.constants';
import CustomButton from '../../components/CustomButton/CustomButton';

const Calendar = ({
  currentUser,
  currentViewMode,
  baseDate,
  datesShown,
  eventLists,
  setCurrentViewMode,
  setBaseDate,
  setDatesShown,
  moveToPrevPage,
  moveToNextPage,
}) => {
  const setBaseDateToday = useCallback(() => {
    const today = moment().startOf('day');
    setBaseDate(today);
    setDatesShown(today);
  }, [setBaseDate]);

  const getTitle = useCallback(() => {
    if (currentViewMode.title === VIEW_MODES.DAILY.title) {
      return moment(baseDate).format('YYYY년 M월 D일');
    }
    if (currentViewMode.title === VIEW_MODES.WEEKLY.title) {
      return `${moment(baseDate).weeks()} 번째 주`;
    }
  }, [baseDate]);

  useEffect(() => {
    setCurrentViewMode(VIEW_MODES.WEEKLY);
    setBaseDateToday();
  }, []);

  useEffect(() => {
    console.log(setEventLists, datesShown);
    setEventLists(currentUser.uid);
  }, [datesShown]);

  return (
    <div className='calendar-container'>
      <div className='navigation'>
        <div className='today'>
          <CustomButton onClick={setBaseDateToday}>Today</CustomButton>
        </div>
        <div className='current'>
          <FcPrevious size={24} onClick={() => moveToPrevPage(baseDate)} />
          <FcNext size={24} onClick={() => moveToNextPage(baseDate)} />
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
        <div className='events-field'>
          {eventLists.map((eventList, idx) => (
            <DailyColumn key={idx} evenList={eventList} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, calendar }) => ({
  currentUser: user.currentUser,
  currentViewMode: calendar.currentViewMode,
  baseDate: calendar.baseDate,
  datesShown: calendar.datesShown,
  eventLists: calendar.eventLists,
});

const mapDispatchToProps = dispatch => ({
  setCurrentViewMode: viewMode => dispatch(setCurrentViewMode(viewMode)),
  setBaseDate: baseDate => dispatch(setBaseDate(baseDate)),
  setDatesShown: baseDate => dispatch(setDatesShown(baseDate)),
  setEventLists: uid => dispatch(setEventLists(uid)),
  moveToPrevPage: baseDate => dispatch(moveToPrevPage(baseDate)),
  moveToNextPage: baseDate => dispatch(moveToNextPage(baseDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
