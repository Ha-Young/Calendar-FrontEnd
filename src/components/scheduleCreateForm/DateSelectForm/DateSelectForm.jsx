import React from 'react';
import styles from './DateSelectForm.module.scss';

import DateInputForm from '../DateInputForm/DateInputForm';
import TimeInputForm from '../TimeInputForm/TimeInputForm';

const DateSelectForm = ({ changeEvents, values }) => {
  return (
    <div className={styles.dateSelectForm}>
      <DateInputForm onChangeEvent={changeEvents.onDateChange} value={values.date}></DateInputForm>
      <div></div>
      <TimeInputForm selectionType="start" onchanegeEvent={changeEvents.onStartHourChange} value={values.startHour}></TimeInputForm>
      <span>~</span>
      <TimeInputForm selectionType="end" onchanegeEvent={changeEvents.onEndHourChange} value={values.endHour}></TimeInputForm>
    </div>
  );
}

export default DateSelectForm;
