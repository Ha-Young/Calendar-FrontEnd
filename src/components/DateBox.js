import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2000px;

  h3 {
    border-bottom: 1px solid black;
    text-align: center;
  }

  div {
    height: 200px;
    border: 1px solid ${({theme}) => theme.gray};
    text-align: center;
  }
`;

function filterEvent(date, eventData) {
  if (!eventData.date[date]) return;

  const currentDateEventList = eventData.date[date].map((eventId) => {
    return eventData.eventsId[eventId];
  });

  return currentDateEventList;
}

export default function DateBox({ date, eventData }) {
  const currentDate = `${date.year}-${date.month}-${date.date}`;
  const currentDateEventList = filterEvent(currentDate, eventData);

  const hours = Array(24).fill(null).map((none, index) => {
    return index;
  });

  console.log(currentDateEventList);
  return (
    <Container>
      <h3>{date.date}일</h3>
      {hours.map((hour) => {
        return <div key={hour}>{hour}시</div>;
      })}
    </Container>
  );
}

Date.propTypes ={
  date: PropTypes.string.isRequired,
};
