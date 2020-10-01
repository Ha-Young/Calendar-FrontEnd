import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import * as Styled from '../styled';
import { createSchedule } from '../../actions';
import { schedule } from '../../utils/api';
import validateForm from '../../utils/validateForm';

function Schedule ({ onSubmit }) {
  const initialState = {
    name: '',
    desc: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    color: '',
  };
  const [scheduleData, setScheduleData] = useState(initialState);

  function handleChange (e) {
    setScheduleData({
      ...scheduleData,
      [e.target.name]: e.target.value
    });
  }

  const handleColorClick = (e) => {
    e.preventDefault();
    setScheduleData({
      ...scheduleData,
      color: e.target.value
    })
  };

  const SCHEDULE_TYPE_COLORS = ['#FF2A00', '#FFFFFF', '#FCBA03', '#2600FC', '#00FC87'];
  const colors = SCHEDULE_TYPE_COLORS.map((color, index) => {
    return <input type="color" name="color" value={color} id="" onClick={handleColorClick} key={index} readOnly={true} />;
  });

  function handleSubmit (e) {
    e.preventDefault();

    if (!validateForm(scheduleData)) return;

    onSubmit(scheduleData);

    setScheduleData(initialState);
  }

  return(
    <Styled.Schedule>
      <h1>Write down your schedule!</h1>
      <form>
        <div className="name">
          <label htmlFor="">Schedule name</label>
          <input type="text" name="name" id="" value={scheduleData.name} onChange={handleChange} />
        </div>
        <div className="desc">
          <label htmlFor="">Schedule description</label>
          <input type="text" name="desc" id="" value={scheduleData.desc} onChange={handleChange} />
        </div>
        <div className="start-time">
          <label htmlFor="">Start Date and time</label>
          <input type="date" name="startDate" id="" value={scheduleData.startDate} onChange={handleChange} />
          <input type="time" name="startTime" id="" value={scheduleData.startTime} onChange={handleChange} />
        </div>
        <div className="end-time">
          <label htmlFor="">End Date and time</label>
          <input type="date" name="endDate" id="" value={scheduleData.endDate} onChange={handleChange} />
          <input type="time" name="endTime" id="" value={scheduleData.endTime} onChange={handleChange} />
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
