import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import InfoPage from '../components/InfoPage';
import WriteEventForm from '../components/WriteEventForm';
import Modal from '../components/Modal';
import { validateEventForm } from '../utils/utilFunction';
import {
  setDataToFirebase,
  deleteDataFromFirebase
} from '../utils/api';

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
  const [validMessage, setValidMessage] = useState('');
  const [isOpenedConfirmModal, setIsOpenedConfirmModal] = useState(false);
  const history = useHistory();
  const currentEventId = useParams().eventId;
  const currentEvent = eventData.eventsId[currentEventId];

  const [currentEventData, setCurrentEventData] = useState({
    date: currentEvent?.date,
    description: currentEvent?.description,
    endTime: currentEvent?.endTime,
    startTime: currentEvent?.startTime,
    title: currentEvent?.title,
    id: currentEvent?.id,
  });

  function handleChange({ target }) {
    setCurrentEventData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      }
    })
  }

  function goHome() {
    history.push('/calendar');
  }

  function goBack() {
    if (isUpdating) {
      setIsUpdating(false);
    } else {
      goHome();
    }
  }

  function handleUpdate() {
    if (isUpdating) {
      const validMessage = validateEventForm(currentEventData);
        if (validMessage) {
          setValidMessage(validMessage);
        } else {
          setDataToFirebase(currentEventData, uid, currentEventId);
          goHome();
        }
    } else {
      setIsUpdating(true);
    }
  }

  function initValidMessage() {
    setValidMessage('')
  }

  function toggleModal() {
    setIsOpenedConfirmModal(prev => !prev);
  }

  function confirmRemove() {
    deleteDataFromFirebase(uid, currentEventId);
    goHome();
  }

  return (
    currentEvent &&
    <InfoPage>
      <Container>
      {
        isOpenedConfirmModal && <Modal>
          <Button value="안지우기" onClick={toggleModal} />
          <Button value="정말 지우기" onClick={confirmRemove} />
        </Modal>
      }
      {
        !!validMessage && <Modal>
          <h3>{validMessage}</h3>
          <div>
            <Button value="뒤로" onClick={initValidMessage} />
          </div>
        </Modal>
      }
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
          <Button value='뒤로' onClick={goBack} />
          <Button value='업데이트' onClick={handleUpdate} />
          {!isUpdating && <Button value='지우기' onClick={toggleModal} />}
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
