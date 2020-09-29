import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import * as Styled from '../styled';

export default function Main () {
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleDesc, setScheduleDesc] = useState('');
  const [scheduleStartDate, setScheduleStartDate] = useState('');
  const [scheduleStartTime, setScheduleStartTime] = useState('');
  const [scheduleEndDate, setScheduleEndDate] = useState('');
  const [scheduleEndTime, setScheduleEndTime] = useState('');
  const [color, setColor] = useState('');

  const handleColorClick = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  const SCHEDULE_TYPE_COLORS = ['#FF2A00', '#FFFFFF', '#FCBA03', '#2600FC', '#00FC87'];
  const colors = SCHEDULE_TYPE_COLORS.map((color, index) => {
    return <input type="color" name="color" value={color} id="" onClick={handleColorClick} key={index} readOnly={true} />;
  });

  return(
    <Styled.Schedule>
      <h1>Write down your schedule!</h1>
      <form action="">
        <div className="name">
          <label htmlFor="">Schedule name</label>
          <input type="text" name="name" id="" value={scheduleName} onChange={setScheduleName} />
        </div>
        <div className="desc">
          <label htmlFor="">Schedule description</label>
          <input type="text" name="name" id="" value={scheduleDesc} onChange={setScheduleDesc} />
        </div>
        <div className="start-time">
          <label htmlFor="">Start Date and time</label>
          <input type="date" name="startDate" id="" value={scheduleStartDate} onChange={e => setScheduleStartDate(e.target.value)} />
          <input type="time" name="startTime" id="" value={scheduleStartTime} onChange={e => setScheduleStartTime(e.target.value)} />
        </div>
        <div className="end-time">
          <label htmlFor="">End Date and time</label>
          <input type="date" name="endDate" id="" value={scheduleEndDate} onChange={setScheduleEndDate} />
          <input type="time" name="endTime" id="" value={scheduleEndTime} onChange={setScheduleEndTime} />
        </div>
        <div className="color">
          <label htmlFor="">Type of schedule</label>
          {colors}
        </div>
        <button type="submit">register</button>
      </form>
    </Styled.Schedule>
  );
}
