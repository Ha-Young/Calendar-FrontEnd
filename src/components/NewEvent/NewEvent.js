import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './NewEvent.module.scss';
import EventForm from '../EventForm/EventForm';
import CustomButton from '../CustomButton/CustomButton';

import convertToISOString from '../../utils/convertToISOString';
import { setNewEvent } from '../../firebase/utils/event';

const NewEvent = ({ createdBy, history, location }) => {
  const submitNewEvent = async event => {
    const { title, description, date, startHour, endHour } = event;

    try {
      await setNewEvent(createdBy, date, {
        title,
        description,
        start: convertToISOString.combine(date, startHour + ''),
        end: convertToISOString.combine(date, endHour + ''),
      });
    } catch (error) {
      console.warn('New Event Error', error);
    }

    history.push('/calendar');
  };

  return (
    <div className={styles.NewEvent}>
      <h1>New Event</h1>
      <EventForm onSubmit={submitNewEvent} initValue={location.state}>
        <CustomButton type='submit'>새 이벤트 등록!!</CustomButton>
      </EventForm>
    </div>
  );
};

export default withRouter(NewEvent);
