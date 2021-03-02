import React from 'react';
import styled from 'styled-components';

const TimeLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;

  .time {
    height: 30px;
    text-align: center;
    padding-right: 0.3em;
    border-right: solid 1px;
    border-bottom: solid 1px;
  }
`;

const TimeLayout = () => {
  return (
    <TimeLayoutContainer>
      <div className="time">00:00 ~ 01:00</div>
      <div className="time">01:00 ~ 02:00</div>
      <div className="time">02:00 ~ 03:00</div>
      <div className="time">04:00 ~ 05:00</div>
      <div className="time">05:00 ~ 06:00</div>
      <div className="time">06:00 ~ 07:00</div>
    </TimeLayoutContainer>
  );
};

export default TimeLayout;
