import React, { useEffect, useState } from 'react';
import styles from './ScheduleCreateForm.module.scss';
import { changeDateFormatYYYYMD, changeDateFormatYYYYMMDD, dateInfoToObject, removeZeroInString } from '../../utils/dateUtil';

import Container from '../publicComponent/Container/Container';
import DateSelectForm from './DateSelectForm/DateSelectForm';
import ColorInputForm from './ColorInputForm/ColorInputForm';
import TextInputForm from './TextInputForm/TextInputForm';
import ButtonInputForm from '../publicComponent/ButtonComponent/ButtonComponent';
import { setSchedule } from '../../api';

const ScheduleCreateForm = ({ currentDate }) => {
  const [date, setDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [color, setColor] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const editedDate = changeDateFormatYYYYMMDD(currentDate);
    setDate(editedDate.toString());
  }, [currentDate]);

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleStartHourChange(event) {
    setStartHour(event.target.value);
  }

  function handleEndHourChange(event) {
    setEndHour(event.target.value);
  }

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmitButtonClick() {
    // 여긴 firebase 등록이 들어감...
    console.log('button event 작동');
    const dateObj = dateInfoToObject(changeDateFormatYYYYMD(date));
    const newSchedule = {
      key: 0,
      year: Number(dateObj.year),
      month: Number(dateObj.month),
      day: Number(dateObj.day),
      startHour: Number(removeZeroInString(startHour)),
      endHour: Number(removeZeroInString(endHour)),
      content: content,
      color: color
    };
    console.log('들어가는 데이터', newSchedule);
    setSchedule(newSchedule).then(() => {
      window.location.href = "/";
    });
  }

  const dateHandlers = {
    onDateChange: handleDateChange,
    onStartHourChange : handleStartHourChange,
    onEndHourChange : handleEndHourChange
  };
  
  const dateValues = {
    date,
    startHour,
    endHour
  };

  return (
    <Container className={styles.container}>
      <div className={styles.formTitle}>Add Schedule</div>
      <div className={styles.creatorContainer}>
        <DateSelectForm changeEvents={dateHandlers} values={dateValues}></DateSelectForm>
        <ColorInputForm onChangeEvent={handleColorChange} value={color}></ColorInputForm>
        <TextInputForm placeHolder={'Contents'} onChangeEvent={handleContentChange} value={content}></TextInputForm>
        <ButtonInputForm textContent={'Add'} onClickEvent={handleSubmitButtonClick}></ButtonInputForm>
      </div>
    </Container>
  );
};

export default ScheduleCreateForm;
