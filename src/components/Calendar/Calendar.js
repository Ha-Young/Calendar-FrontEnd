import React, { useState } from 'react';
import moment from 'moment';

import './Calendar.scss';

import DailyView from '../DailyView/DailyView';
import Timeline from '../Timeline/Timeline';

import { VIEW_MODE, VIEW_MODE_LIST } from '../../constants/calendar.constants';
import CustomButton from '../CustomButton/CustomButton';

export default function Calendar() {
  const [currentViewMode, setCurrentViewMode] = useState(VIEW_MODE.DAILY);

  return (
    <div className='calendar-container'>
      <div className='navigation'>
        <div className='today'>
          <CustomButton>Today</CustomButton>
        </div>
        <div className='current'>{moment().format('YYYY년 MM월 DD일')}</div>
        <div className='view-mode'>
          {VIEW_MODE_LIST.map(viewMode => (
            <CustomButton selected={currentViewMode === viewMode}>
              {viewMode}
            </CustomButton>
          ))}
        </div>
      </div>
      <div className='content'>
        <div className='timeline'>
          <Timeline />
        </div>
        <div className='field'>
          <DailyView day={1} />
          <DailyView day={2} />
          <DailyView day={3} />
          <DailyView day={4} />
          <DailyView day={5} />
          <DailyView day={6} />
          <DailyView day={7} />
        </div>
      </div>
    </div>
  );
}
