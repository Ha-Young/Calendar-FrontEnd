import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { nanoid } from 'nanoid';

import Button from '../components/Button';
import WriteEventForm from '../components/WriteEventForm';
import Modal from '../components/Modal';
import { setDataToFirebase } from '../utils/api';
import { validateEventForm } from '../utils/utilFunction';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: ${({theme}) => theme.blue};

  fieldset {
    width: 40%;
    height: 600px;
    margin: auto;
    border: 1px solid ${({theme}) => theme.blue};
    border-radius: 10px;
    background: white;

    legend {
      font-size: 40px;
      font-weight: 200;
      background: white;
      border-radius: 15px;
      padding: 10px 40px;
      border: 1px solid ${({theme}) => theme.blue};
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
          background: ${({theme}) => theme.red};
        }
      }
    }
  }
`;

function CreateEventContainer({
  uid,
}) {
  const history = useHistory();
  const [validMessage, setValidMessage] = useState('');

  function handleGoBack() {
    history.push('/calendar');
  }

  const [eventData, setEventData] = useState({
    date: moment().format('YYYY-MM-DD'),
    description: "",
    endTime: moment().hour(),
    startTime: moment().hour(),
    title: "",
    id: nanoid(12),
  });

  function handleChange({ target }) {
    setEventData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      }
    })
  }

  function createEvent(e) {
    const validMessage = validateEventForm(eventData);

    if (validMessage) {
      setValidMessage(validMessage);
    } else {
      setDataToFirebase(eventData, uid);
      handleGoBack();
    }
  }

  function initValidMessage() {
    setValidMessage('');
  }

  return (
    <Container>
      {
        !!validMessage &&
          <Modal>
            <h3>{validMessage}</h3>
            <div>
              <Button value='뒤로' onClick={initValidMessage} />
            </div>
          </Modal>
      }
      <WriteEventForm
        formTitle="이벤트 만들기"
        onChange={handleChange}
        data={eventData}
      >
        <Button
          value='취소'
          onClick={handleGoBack}
        />
        <Button
          value='이벤트 만들기'
          onClick={createEvent}
        />
      </WriteEventForm>
    </Container>
  );
}

function mapstateToProps(state) {
  return {
    uid: state.user.uid,
  };
}

CreateEventContainer.propTypes = {
  uid: PropTypes.string.isRequired,
};

export default connect(mapstateToProps, null)(CreateEventContainer);
