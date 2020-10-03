import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import './EventDetail.scss';
import CustomButton from '../CustomButton/CustomButton';

import { getEventById } from '../../firebase/utils/eventList';

const EventDetail = ({ match }) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      const event = await getEventById(match.params.eventId);
      setEvent(event);
    };
    getEvent();
  }, []);

  return (
    <div className='event-detail'>
      <h1>Event Detail</h1>
      {event && (
        <div className='event-detail-content'>
          <div>제목 : {event.title}</div>
          <div>설명: {event.description}</div>
          <div>시작 : {moment(event.start).format('LLL')}</div>
          <div>종료 : {moment(event.end).format('LLL')}</div>
        </div>
      )}
      <div className='buttons'>
        <CustomButton>수정</CustomButton>
        <CustomButton>삭제</CustomButton>
      </div>
    </div>
  );
};

export default withRouter(EventDetail);
