import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import './EventDetail.scss';
import EventForm from '../EventForm/EventForm';
import CustomButton from '../CustomButton/CustomButton';

import convertToISOString from '../../utils/convertToISOString';
import { getEventById } from '../../firebase/utils/eventList';
import { updateEvent } from '../../firebase/utils/event';

const EventDetail = ({ createdBy, history, location, match }) => {
  const submitEditEvent = async event => {
    const { title, description, date, startHour, endHour } = event;

    try {
      await updateEvent(createdBy, date, {
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
    <div className='event-detail'>
      <h1>Event Detail</h1>
      <EventForm
        initValue={location.state}
        onSubmit={submitEditEvent}
        disabled
      />
      <div className='buttons'>
        <CustomButton>수정</CustomButton>
        <CustomButton>삭제</CustomButton>
      </div>
    </div>
  );
};

export default withRouter(EventDetail);
