import React, { useEffect } from 'react';
import styled from 'styled-components';

import OneHour from './OneHour/OneHour';

const ContentLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
`;

const ContentLayout = ({ dateArr }) => {
  // firebase 데이터 가져오기 가져오는 갯수만큼 onehour안에 그려줌 ㅇㅇ
  useEffect(() => {

  }, []);

  function getOneHourArray() {
    const oneHourArray = [];
    for (let i = 0; i < 24; i++) {
      oneHourArray.push(<OneHour key={i} scheduleData={''}></OneHour>)
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
