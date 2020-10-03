import React, { useEffect } from 'react';
import moment from 'moment';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { connect } from 'react-redux';

import {
  setCurrentViewMode,
  setBaseDate,
  setEventLists,
  moveToNextPage,
  moveToPrevPage,
} from '../../redux/calendar/calendar.actions';

import './CalendarContainer.scss';
import Timeline from '../../components/Timeline/Timeline';
import DailyColumn from '../../components/DailyColumn/DailyColumn';
import CustomButton from '../../components/CustomButton/CustomButton';

import { VIEW_MODES as VIEW } from '../../constants/calendar.constants';
import { getEventLists } from '../../firebase/utils/eventList';
import getViewTitle from '../../utils/getViewTitle';

const Calendar = ({
  uid,
  viewMode,
  date,
  datesShown,
  eventLists,
  setToday,
  setDaily,
  setWeekly,
  moveToPrevPage,
  moveToNextPage,
  setEventLists,
}) => {
  useEffect(() => {
    setToday();
    setWeekly();
  }, [setToday, setWeekly]);

  useEffect(() => {
    setEventLists(uid, datesShown);
  }, [uid, datesShown, setEventLists]);

  return (
    <div className='calendar-container'>
      <div className='navigation'>
        <div className='today'>
          <CustomButton onClick={setToday}>Today</CustomButton>
        </div>
        <div className='current'>
          <FcPrevious size={24} onClick={moveToPrevPage} />
          <FcNext size={24} onClick={moveToNextPage} />
          {getViewTitle(viewMode, date)}
        </div>
        <div className='view-modes'>
          <CustomButton
            onClick={() => setDaily()}
            selected={VIEW.DAILY.title === viewMode}
          >
            {VIEW.DAILY.title}
          </CustomButton>
          <CustomButton
            onClick={() => setWeekly()}
            selected={VIEW.WEEKLY.title === viewMode}
          >
            {VIEW.WEEKLY.title}
          </CustomButton>
        </div>
      </div>
      <div className='content'>
        <Timeline />
        <div className='events-field'>
          {eventLists.map(({ date, eventList }, idx) => (
            <DailyColumn
              key={idx}
              viewMode={viewMode}
              date={date}
              eventList={eventList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, calendar }) => ({
  uid: user.currentUser.uid,
  viewMode: calendar.currentViewMode.title,
  date: calendar.baseDate,
  datesShown: calendar.datesShown,
  eventLists: calendar.eventLists,
});

const mapDispatchToProps = dispatch => ({
  setToday() {
    const today = moment().startOf('day');
    dispatch(setBaseDate(today));
  },
  setDaily() {
    dispatch(setCurrentViewMode(VIEW.DAILY));
  },
  setWeekly() {
    dispatch(setCurrentViewMode(VIEW.WEEKLY));
  },
  moveToPrevPage: () => dispatch(moveToPrevPage()),
  moveToNextPage: () => dispatch(moveToNextPage()),

  async setEventLists(uid, datesShown) {
    try {
      const eventLists = await getEventLists(uid, datesShown);
      dispatch(setEventLists(eventLists));
    } catch (error) {
      console.warn(error);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
