import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import Button from '../components/Button';
import { createEvent } from '../actions';

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
  createEvent,
  uid,
}) {
  const history = useHistory();
  const [eventData, setEventData] = useState({
    createdAt: "",
    creator: "",
    date: "",
    description: "",
    endTime: "",
    id: "",
    startTime: "",
    title: "",
  });

  function onChange({ target }) {
    setEventData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      }
    })
  }

  function handleGoBack() {
    history.push('/calendar');
  }

  function handleSubmit(e) {
    e.preventDefault();
    //validation
    createEvent(eventData, uid, nanoid(12));
    history.push('/calendar');
  }

  return (
    <Container>
      <fieldset>
        <legend>이벤트 만들기</legend>
        <div>
          Title:
          <Input
            type='text'
            onChange={onChange}
            placeholder='Title 을 입력해주세요'
            name='title'
          />
          Description:
          <Input
            type='text-area'
            onChange={onChange}
            placeholder='Description 을 입력해주세요'
            name='description'
          />
          Date:
          <Input
            type='date'
            onChange={onChange}
            name='date'
          />
          StartTime:
          <Input
            type='time'
            onChange={onChange}
            name='startTime'
          />
          EndTime:
          <Input
            type='time'
            onChange={onChange}
            name='endTime'
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
    createEvent(data, uid, dataId) {
      dispatch(createEvent(data, uid, dataId))
    },
  };
}

function mapstateToProps(state) {
  return {
    uid: state.user.uid,
  };
}

CreateEventContainer.propTypes = {
  uid: PropTypes.string.isRequired,
  createEvent: PropTypes.func.isRequired,
};

export default connect(mapstateToProps, mapDispatchToProps)(CreateEventContainer);
