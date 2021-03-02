import React from 'react';
import './Calendar.scss';

import CalendarUpper from './CalendarUpper/CalendarUpper';

const Calendar = () => {
  return (
    <div className="calendar">
      <CalendarUpper></CalendarUpper>
      <hr></hr>
      <div className="calendar__timeline" id="test">
        <div className="calendar__timeline__time">
          <div className="time">00:00 ~ 01:00</div>
          <div className="time">01:00 ~ 02:00</div>
          <div className="time">02:00 ~ 03:00</div>
          <div className="time">04:00 ~ 05:00</div>
          <div className="time">05:00 ~ 06:00</div>
          <div className="time">06:00 ~ 07:00</div>
        </div>
        <div className="calendar__timeline__contexts">
          <div className="onehour">
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
          </div>
          <div className="onehour">
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
          </div>
          <div className="onehour">
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
          </div>
          <div className="onehour">
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
          </div>
          <div className="onehour">
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
          </div>
          <div className="onehour">
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
            <div className="context">style</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
