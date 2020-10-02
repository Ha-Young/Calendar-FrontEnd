import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import HourBox from './HourBox';
import { combineDate } from '../utils/utilFunction';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2000px;

  h3 {
    border-bottom: 1px solid black;
    text-align: center;
  }

  .hour-box {
    height: 200px;
    border: 1px solid ${({theme}) => theme.gray};
    text-align: center;
    overflow:hidden;
  }

  ul {
    width: 100%;

    .event-list {
      width: 100%;
      transition: all 0.3s;
      margin-bottom: 5px;

      &:hover {
        width: 100%;
        background: ${({theme}) => theme.yellow};
        color: white;
        cursor: pointer;
      }
    }
  }

  .paint {
    background: ${({theme}) => theme.blue};
    border-radius: 10px;
    color: white;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      background: ${({theme}) => theme.yellow};
    }
  }
`;

function filterEvent(date, eventData) {
  if (!eventData.date[date]) return [];

  const currentDateEventList = eventData.date[date].map((eventId) => {
    return eventData.eventsId[eventId];
  });

  return currentDateEventList;
}

function isInEvent(hour, start, end) {
  return (hour >= start && hour <= end);
}

export default function DateBox({ date, eventData }) {
  const currentDate = moment(combineDate(date)).format('YYYY-MM-DD');
  const currentDateEventList = filterEvent(currentDate, eventData);

  const hours24 = Array(24).fill(null).map((_, hour) => {
    const events = currentDateEventList.filter((event) => {
      return isInEvent(hour, event.startTime, event.endTime);
    });

    return {
      hour,
      events,
    };
  });

  return (
    <Container>
      <h3>{date.date}일</h3>
      {
        hours24.map((hourData) => {
          return (
            <HourBox
              key={hourData.hour}
              hour={hourData.hour}
              events={hourData.events}
            />
          );
        })
      }
    </Container>
  );
}

Date.propTypes ={
  date: PropTypes.string.isRequired,
  eventData: PropTypes.shape({
    date: PropTypes.string,
    eventsId: PropTypes.string.isRequired,
  }),
};
