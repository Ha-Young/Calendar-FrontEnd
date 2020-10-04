import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as Styled from '../../components/styled';
import { createSchedule } from '../../actions';
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

  function handleInputChange ({ target: { name, value } }) {
    setScheduleData({
      ...scheduleData,
      [name] : value
    });
  }

  const handleColorClick = (e) => {
    e.preventDefault();

    setScheduleData({
      ...scheduleData,
      color: e.target.value
    });
  };

  function handleSubmit (e) {
    e.preventDefault();

    if (!validateForm(scheduleData)) return;

    onSubmit(scheduleData);

    setScheduleData(initialState);
  }

  const SCHEDULE_TYPE_COLORS = ['#FF2A00', '#FFFFFF', '#FCBA03', '#2600FC', '#00FC87'];
  const colors = SCHEDULE_TYPE_COLORS.map((color, index) => {
    return (
      <input
        type="color"
        name="color"
        value={color}
        onClick={handleColorClick}
        key={index}
        readOnly={true}
      />
    );
  });

  return(
    <Styled.Schedule>
      <h1>Write down your schedule!</h1>
      <form>
        <div className="name">
          <label>Schedule name</label>
          <input
            type="text"
            name="name"
            value={scheduleData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="desc">
          <label>Schedule description</label>
          <input
            type="text"
            name="desc"
            value={scheduleData.desc}
            onChange={handleInputChange}
          />
        </div>
        <div className="start-time">
          <label>Start Date and time</label>
          <input
            type="date"
            name="startDate"
            value={scheduleData.startDate}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="startTime"
            value={scheduleData.startTime}
            onChange={handleInputChange} />
        </div>
        <div className="end-time">
          <label>End Date and time</label>
          <input
            type="date"
            name="endDate"
            value={scheduleData.endDate}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="endTime"
            value={scheduleData.endTime}
            onChange={handleInputChange}
          />
        </div>
        <div className="color">
          <label>Type of schedule</label>
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
      createSchedule(schedule);
    }
  }
};

export default connect(null, mapDispatchToProps)(Schedule);
