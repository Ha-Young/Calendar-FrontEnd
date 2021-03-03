import React from 'react';
import styled from 'styled-components';

import OneHour from './OneHour/OneHour';

const ContentLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
`;

const ContentLayout = ({ todayData }) => {
  // TODO: todayData를 못받으면 그냥 빈채로 만들도록 해주기
  Array(24)
  function getOneHourArray() {
    const oneHourArray = [];
    // TODO: 해당 스케쥴의 시간대에 해당하는 것만 넣어줘야함. = 로직필요
    for (let i = 0; i < 24; i++) {
      oneHourArray.push(<OneHour key={i} scheduleData={todayData}></OneHour>)
    }

    return oneHourArray;
  }

  return (
    <ContentLayoutContainer>
      {getOneHourArray()}
    </ContentLayoutContainer>
  );
};

export default ContentLayout;
