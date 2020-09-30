import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import * as Styled from '../styled';
import { createSchedule } from '../../actions';
import { schedule } from '../../utils/api';

function Schedule ({ onSubmit }) {
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

  function handleSubmit (e) {
    e.preventDefault();

    // submit하면 onSubmit을 실행하는데,
    // 이 onSubmit은..
    onSubmit({
      scheduleName,
      scheduleDesc,
      scheduleStartDate,
      scheduleStartTime,
      scheduleEndDate,
      scheduleEndTime,
      color
    });

    setScheduleName('');
    setScheduleDesc('');
    setScheduleStartDate('');
    setScheduleStartTime('');
    setScheduleEndDate('');
    setScheduleEndTime('');
    setColor('');
  }

  return(
    <Styled.Schedule>
      <h1>Write down your schedule!</h1>
      <form>
        <div className="name">
          <label htmlFor="">Schedule name</label>
          <input type="text" name="name" id="" value={scheduleName} onChange={e => setScheduleName(e.target.value)} />
        </div>
        <div className="desc">
          <label htmlFor="">Schedule description</label>
          <input type="text" name="name" id="" value={scheduleDesc} onChange={e => setScheduleDesc(e.target.value)} />
        </div>
        <div className="start-time">
          <label htmlFor="">Start Date and time</label>
          <input type="date" name="startDate" id="" value={scheduleStartDate} onChange={e => setScheduleStartDate(e.target.value)} />
          <input type="time" name="startTime" id="" value={scheduleStartTime} onChange={e => setScheduleStartTime(e.target.value)} />
        </div>
        <div className="end-time">
          <label htmlFor="">End Date and time</label>
          <input type="date" name="endDate" id="" value={scheduleEndDate} onChange={(e) => setScheduleEndDate(e.target.value)} />
          <input type="time" name="endTime" id="" value={scheduleEndTime} onChange={(e) => setScheduleEndTime(e.target.value)} />
        </div>
        <div className="color">
          <label htmlFor="">Type of schedule</label>
          {colors}
        </div>
        <button type="submit" onClick={handleSubmit}>register</button>
      </form>
    </Styled.Schedule>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (schedule) => {
      createSchedule(schedule); // action을 실행한다
    }
  }
};

export default connect(null, mapDispatchToProps)(Schedule);
