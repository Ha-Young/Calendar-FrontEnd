import React from 'react';
import styled from 'styled-components';

import OneHour from './OneHour/OneHour';

const ContentLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  border-right: solid 1px black;
`;

const OneDay = ({ todayData, isWeek }) => {
  // ERR!!!! type에 대한 Err체크가 필요...
  console.log('ONEDAY : ', todayData);
  function getOneHourArray() {
    const twentyFourHourArray = todayData.timeArray;
    const datas = todayData.datas || {};
    Object.values(datas).forEach((el) => {
      for (let i = el.startHour; i <= el.endHour; i++ ) {
        twentyFourHourArray[i] = el;
      }
    });
    console.log('ONEDAY twentyFourHourArray : ', twentyFourHourArray);
    return twentyFourHourArray.map((eachHour, i) => {
      let isEdge = 0;
      if (eachHour.startHour === i) isEdge = 1;
      else if (eachHour.endHour === i) isEdge = -1;
      return (<OneHour key={i} oneData={eachHour} isEdge={isEdge} isWeek={isWeek}></OneHour>);
    });
  }

  return (
    <ContentLayoutContainer>
      {getOneHourArray()}
    </ContentLayoutContainer>
  );
};

export default OneDay;
