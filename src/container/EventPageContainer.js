import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import InfoPage from '../components/InfoPage';
import WriteEventForm from '../components/WriteEventForm';
import { setDataToFirebase } from '../utils/api';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  h1 {
    font-size: 40px;
    font-weight: 200;
    border-bottom: 1px solid gray;
  }

  .event-date {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .button-box {
    display: flex;
    flex-direction: row;

    button {
      margin: 20px;
      background: ${({theme}) => theme.red};
    }
  }
`;

function EventPageContainer({ eventData, uid }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const history = useHistory();
  const currentEventId = useParams().eventId;
  const currentEvent = eventData.eventsId[currentEventId];

  const [currentEventData, setCurrentEventData] = useState({
    date: currentEvent.date,
    description: currentEvent.description,
    endTime: currentEvent.endTime,
    startTime: currentEvent.startTime,
    title: currentEvent.title,
    id: currentEvent.id,
  });

  function handleChange({ target }) {
    setCurrentEventData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      }
    })
  }

  function goBack() {
    history.push('/calendar');
  }

  function handleUpdate() {
    if (isUpdating) {
      console.log(uid)
      setDataToFirebase(currentEventData, uid, currentEventId);
      history.push('/calendar');
    } else {
      setIsUpdating(true);
    }
  }

  return (
    <InfoPage>
      <Container>
      {
        isUpdating
        ?
          <WriteEventForm
            formTitle='정보 업데이트'
            onChange={handleChange}
            data={currentEventData}
          />
        :
          <>
            <h1>{currentEvent.title}</h1>
            <p>{currentEvent.description}</p>
            <div className='time-box'>
            <div className='event-date'>{currentEvent.date}</div>
              <span>
                <b>{currentEvent.startTime}</b> 시부터{' '}
              </span>
              <span>
                <b>{currentEvent.endTime}</b> 시까지
              </span>
            </div>
          </>
      }
        <div className='button-box'>
          <Button value='뒤로' onClick={goBack}/>
          <Button value='업데이트' onClick={handleUpdate}/>
        </div>
      </Container>
    </InfoPage>
  );
}

function mapstateToProps(state) {
  return {
    eventData: state.eventData,
    uid: state.user.uid,
  };
}

export default connect(mapstateToProps, null)(EventPageContainer);
