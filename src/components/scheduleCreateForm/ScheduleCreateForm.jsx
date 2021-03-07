import React, { useEffect, useState } from 'react';
import styles from './ScheduleCreateForm.module.scss';
import { changeDateFormatYYYYMD, changeDateFormatYYYYMMDD, dateAssemble, dateInfoToObject, plusFrontZero, removeZeroInString } from '../../utils/dateUtil';
import { setSchedule } from '../../api';
import { useLocation } from 'react-router-dom';

import Container from '../publicComponent/Container/Container';
import DateSelectForm from './DateSelectForm/DateSelectForm';
import ColorInputForm from './ColorInputForm/ColorInputForm';
import TextInputForm from './TextInputForm/TextInputForm';
import ButtonInputForm from '../publicComponent/ButtonComponent/ButtonComponent';

const ScheduleCreateForm = ({ currentDate }) => {
  const [date, setDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [color, setColor] = useState('#DDDDDD');
  const [content, setContent] = useState('');
  const [key, setKey] = useState(null);
  const { state } = useLocation();
  
  useEffect(() => {
    if (state) {
      const assembledDat = dateAssemble(state.year, state.month, state.day);
      const editedDate = changeDateFormatYYYYMMDD(assembledDat);
      setDate(editedDate.toString());
      setStartHour(plusFrontZero(state.startHour));
      setEndHour(plusFrontZero(state.endHour));
      setColor(state.color);
      setContent(state.content);
      setKey(state.key);
    } else {
      const editedDate = changeDateFormatYYYYMMDD(currentDate);
      setDate(editedDate.toString());
    }
  }, [currentDate, state]);

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
    const dateObj = dateInfoToObject(changeDateFormatYYYYMD(date));
    const newSchedule = {
      key: key,
      year: Number(dateObj.year),
      month: Number(dateObj.month),
      day: Number(dateObj.day),
      startHour: Number(removeZeroInString(startHour)),
      endHour: Number(removeZeroInString(endHour)),
      content: content,
      color: color
    };
    setSchedule(newSchedule, newSchedule.key);
    window.location.href = "/";
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
