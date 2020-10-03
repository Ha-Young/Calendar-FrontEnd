import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import './EventDetail.scss';
import EventForm from '../EventForm/EventForm';
import CustomButton from '../CustomButton/CustomButton';

import convertToISOString from '../../utils/convertToISOString';
import { updateEvent } from '../../firebase/utils/event';

const EventDetail = ({ createdBy, location }) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitEditEvent = async event => {
    const { eventId, title, description, date, startHour, endHour } = event;

    try {
      await updateEvent(createdBy, date, eventId, {
        title,
        description,
        start: convertToISOString.combine(date, startHour + ''),
        end: convertToISOString.combine(date, endHour + ''),
      });
    } catch (error) {
      console.warn('New Event Error', error);
    }

    setIsEditing(false);
  };

  return (
    <div className='event-detail'>
      <h1>Event Detail</h1>
      <EventForm
        initValue={location.state}
        onSubmit={submitEditEvent}
        disabled={!isEditing}
      >
        {isEditing && <CustomButton type='submit'>수정 완료</CustomButton>}
      </EventForm>

      {!isEditing && (
        <div className='buttons'>
          <CustomButton type='button' onClick={() => setIsEditing(true)}>
            수정
          </CustomButton>
          <CustomButton type='button'>삭제</CustomButton>
        </div>
      )}
    </div>
  );
};

export default withRouter(EventDetail);
