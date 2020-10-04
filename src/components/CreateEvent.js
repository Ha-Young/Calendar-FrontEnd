import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format, getHours } from 'date-fns';

import Button from '../components/Button';
import WriteEventForm from '../components/WriteEventForm';
import Modal from '../components/Modal';
import { postDataToFirebase } from '../utils/api';
import { validateEventData } from '../utils/utilFunction';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.blue};

  fieldset {
    width: 40%;
    height: 600px;
    margin: auto;
    border: 1px solid ${({ theme }) => theme.blue};
    border-radius: 10px;
    background: ${({theme}) => theme.white};

    legend {
      font-size: 40px;
      font-weight: 200;
      background: ${({theme}) => theme.white};
      border-radius: 15px;
      padding: 10px 40px;
      border: 1px solid ${({ theme }) => theme.blue};
    }

    > div {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      justify-content: space-around;
      height: 90%;

      > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        button {
          background: ${({ theme }) => theme.red};
        }
      }
    }
  }
`;

const currentDate = new Date();
const initEventForm = {
  title: '',
  description: '',
  startTime: String(getHours(currentDate)),
  endTime: String(getHours(currentDate)),
  date: format(currentDate, 'yyyy-MM-dd'),
};

export default function CreateEventContainer({
  uid,
}) {
  const history = useHistory();
  const [validMessage, setValidMessage] = useState('');
  const [eventData, setEventData] = useState(initEventForm);
  const [errMessage, setErrMessage] = useState('');

  function handleCancelButtonClick() {
    history.push('/calendar');
  }

  function handleChange({ target }) {
    setEventData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  }

  function createEvent() {
    const validMessage = validateEventData(eventData);

    if (validMessage) {
      setValidMessage(validMessage);
    } else {
      postDataToFirebase({
        data: { eventData, uid },
        success: () => handleCancelButtonClick(),
        fail: (errMessage) => setErrMessage(errMessage),
      });
    }
  }

  function initValidMessage() {
    setValidMessage('');
  }

  return (
    errMessage ?
      <p>{errMessage}</p>
    :
      <Container>
        {
          validMessage &&
          <Modal>
            <h3>{validMessage}</h3>
            <div>
              <Button buttonText='뒤로' onClick={initValidMessage} />
            </div>
          </Modal>
        }
        <WriteEventForm
          formTitle='이벤트 만들기'
          onChange={handleChange}
          data={eventData}
        >
          <Button
            buttonText='취소'
            onClick={handleCancelButtonClick}
          />
          <Button
            buttonText='이벤트 만들기'
            onClick={createEvent}
          />
        </WriteEventForm>
      </Container>
  );
}

CreateEventContainer.propTypes = {
  uid: PropTypes.string.isRequired,
};
