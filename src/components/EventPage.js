import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import InfoPage from '../components/InfoPage';
import WriteEventForm from '../components/WriteEventForm';
import Modal from '../components/Modal';
import SingleEventPage from '../components/SingleEventPage';
import { validateEventData } from '../utils/utilFunction';
import {
  postDataToFirebase,
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
      background: ${({ theme }) => theme.red};
    }
  }

  fieldset {
    width: 100%;
    height: 100%;
    border: none;

    legend {
      font-size: 40px;
      font-weight: 200;
      text-align: center;
      padding-top: 20px;
    }

    > div {
      display: flex;
      flex-direction: column;
      height: 80%;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export default function EventPage({ eventData, uid }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
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
      };
    });
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
      const validMessage = validateEventData(currentEventData);
      if (validMessage) {
        setValidationMessage(validationMessage);
      } else {
        postDataToFirebase(currentEventData, uid, currentEventId);
        goHome();
      }
    } else {
      setIsUpdating(true);
    }
  }

  function initValidationMessage() {
    setValidationMessage('');
  }

  function toggleModal() {
    setIsOpenedConfirmModal(prev => !prev);
  }

  function confirmRemove() {
    deleteDataFromFirebase(uid, currentEventId);
    goHome();
  }

  return (
    !currentEvent ?
      <Modal>
        <h2>잘못된 이벤트 입니다</h2>
        <Button buttonText='홈으로' onClick={goHome}/>
      </Modal>
    :
      <InfoPage>
        <Container>
          {
            isOpenedConfirmModal &&
            <Modal>
              <Button buttonText='안지우기' onClick={toggleModal}/>
              <Button buttonText='정말 지우기' onClick={confirmRemove}/>
            </Modal>
          }
          {
            validationMessage &&
            <Modal>
              <h3>{validationMessage}</h3>
              <div>
                <Button buttonText='뒤로' onClick={initValidationMessage}/>
              </div>
            </Modal>
          }
          {
            isUpdating ?
              <WriteEventForm
                formTitle='정보 업데이트'
                onChange={handleChange}
                data={currentEventData}
              />
            :
              <SingleEventPage
                title={currentEventData.title}
                description={currentEventData.description}
                date={currentEventData.date}
                startTime={currentEventData.startTime}
                endTime={currentEventData.endTime}
              />
          }
          <div className='button-box'>
            <Button buttonText='뒤로' onClick={goBack}/>
            <Button buttonText='업데이트' onClick={handleUpdate}/>
            {
              !isUpdating &&
              <Button buttonText='지우기' onClick={toggleModal}/>
            }
          </div>
        </Container>
      </InfoPage>
  );
}

EventPage.propTypes = {
  uid: PropTypes.string,
  eventData: PropTypes.shape({
    date: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
    events: PropTypes.arrayOf(PropTypes.string),
    eventsId: PropTypes.objectOf(PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      creator: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string,
      endTime: PropTypes.string,
      id: PropTypes.string.isRequired,
      startTime: PropTypes.string,
      title: PropTypes.string.isRequired,
    })),
  }),
};
