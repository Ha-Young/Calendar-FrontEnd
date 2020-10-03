import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const EventModalWrapper = styled.div`
  p {
    margin-block-start: 0.2em;
    margin-block-end: 0.5em;
  }

  .user-card {
    top: 10%;
    width: 60vh;
    height: 80vh;
    margin: 0 auto;
    position: fixed;
    justify-content: center;
    align-items: center;
    background: white;
    z-index: 1000;
    box-sizing: border-box;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  .user-form {
    display: flex;
    min-height: 50em;
    flex-direction: column;
    margin: 0 auto;
    justfy-content: center;
    align-items: center;
  }

  .user-contents {
    flex-grow: 1;
    margin: 0 20px 30px 20px;
    justfy-content: center;
    text-align: left;
  }

  .user-input,
  .user-button {
    margin: 10rem, auto;
  }

  .contents-wrap {
    font-size: 20px;
  }
`;

export default function EventModal({ onSubmit }) {
  const [ eventTitle, setEventTitle ] = useState('');
  const [ eventDescription, setEventDescription ] = useState('');
  const [ startEventDate, setstartEventDate ] = useState('');
  const [ endEventDate, setendEventDate ] = useState('');

  const history = useHistory();
  const goBackPage = () => {
    history.goBack();
  };

  const handleSubmit = function (ev) {
    ev.preventDefault();

    onSubmit({
      eventTitle,
      eventDescription,
      startEventDate,
      endEventDate
    });
  };

  return (
    <EventModalWrapper>
      <Modal clickOverlay={goBackPage}>
        <div className='user-card'>
          <form className='user-form' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="title"
              value={eventTitle}
              onChange={(ev) => setEventTitle(ev.target.value)}
            />
            <input
              type="text"
              placeholder="description"
              value={eventDescription}
              onChange={(ev) => setEventDescription(ev.target.value)}
            />
            <input
              type="text"
              placeholder="start-time"
              value={startEventDate}
              onChange={(ev) => setstartEventDate(ev.target.value)}
            />
            <input
              type="text"
              placeholder="end-time"
              value={endEventDate}
              onChange={(ev) => setendEventDate(ev.target.value)}
            />
            <button
              className='user-button'
              onClick={goBackPage}>
              submit
            </button>
          </form>
        </div>
      </Modal>
    </EventModalWrapper>
  );
}
