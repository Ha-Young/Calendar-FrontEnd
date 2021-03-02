import React from 'react';
import styled from 'styled-components';

import Content from '../../../../publicComponent/Content/Content';

const OneHourContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  text-align: center;

  .context {
    width: 100%;
    border-right: solid 1px red;
  }
`;

const OneHour = () => {

  function getContextArrary() {
    const contextArray = [];
    // for문의 제한 횟수는 변수
    for (let i = 0; i < 7; i++) {
      contextArray.push(<Content className={"context"} textContent={"style"}></Content>)
    }

    return contextArray;
  }

  return (
    <OneHourContainer>
      {getContextArrary()}
    </OneHourContainer>
  );
};

export default OneHour;
