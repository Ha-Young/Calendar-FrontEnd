import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';
import { createEvent } from '../actions';
import {
  SET_TITLE,
  SET_DESCRIPTION,
  SET_DATE,
  SET_START_TIME,
  SET_END_TIME,
} from '../constants';

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
  eventState,
  setEventInfo
}) {
  const history = useHistory();

  function handleTitleChange(e) {
    setEventInfo(SET_TITLE, e.target.value);
  }

  function handleDescriptionChange(e) {
    setEventInfo(SET_DESCRIPTION, e.target.value);
  }

  function handleDateChange(e) {
    setEventInfo(SET_DATE, e.target.value);
  }

  function handleStartTimeChange(e) {
    setEventInfo(SET_START_TIME, e.target.value);
  }

  function handleEndTimeChange(e) {
    setEventInfo(SET_END_TIME, e.target.value);
  }

  function handleGoBack() {
    history.push('/calendar');
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(eventState);
  }

  return (
    <Container>
      <fieldset>
        <legend>이벤트 만들기</legend>
        <div>
          Title:
          <Input
            type='text'
            onChange={handleTitleChange}
            placeholder='Title 을 입력해주세요'
          />
          Description:
          <Input
            type='text-area'
            onChange={handleDescriptionChange}
            placeholder='Description 을 입력해주세요'
          />
          Date:
          <Input
            type='date'
            onChange={handleDateChange}
          />
          StartTime:
          <Input
            type='time'
            onChange={handleStartTimeChange}
          />
          EndTime:
          <Input
            type='time'
            onChange={handleEndTimeChange}
          />
          <div>
            <Button
              value='취소'
              onClick={handleGoBack}
            />
            <Button
              type='submit'
              value='이벤트 만들기'
              onClick={handleSubmit}
            />
          </div>
        </div>
      </fieldset>
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setEventInfo(valueType, info) {
      dispatch(createEvent(valueType, info));
    },
  };
}

function mapstateToProps(state) {
  return {
    eventState: state.eventState,
  };
}

export default connect(mapstateToProps, mapDispatchToProps)(CreateEventContainer);
