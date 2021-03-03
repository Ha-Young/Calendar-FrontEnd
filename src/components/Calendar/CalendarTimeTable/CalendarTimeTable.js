import React from 'react';
import styled from 'styled-components';

import TimeLayout from './TimeLayout/TimeLayout';
import ContentLayout from './ContentLayout/ContentLayout';

const CalendarTimeTableStyle = styled.div`
  display: flex;
  text-align: start;
  max-height: 370px;
  font-size: 20px;
  padding-right: 3px;
  margin-right: 3px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;

    &-thumb {
      background-color: #2f3542;
      border-radius: 10px;
    }

    &-track {
      background-color: grey;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  }
`;

const CalendarTimeTable = ({ dateArr, scheduleData = [] }) => {
  console.log('CalendarTimeTable', scheduleData);
  // TODO: content Layout을 scheduleData 길이에 따라 1번 혹은 7번 쪼개야한다.

  function getOneDayLayoutArray() {
    return scheduleData.map((el, index) => {
      // TODO: LayOut 이름 바꾸기
      return (
        <ContentLayout key={index} todayData={el}></ContentLayout>
      );
    });
  }

  return (
    <CalendarTimeTableStyle className="calendar__timeline">
      <TimeLayout></TimeLayout>
      {getOneDayLayoutArray()}
    </CalendarTimeTableStyle>
  )
}

export default CalendarTimeTable;
