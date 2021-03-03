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

const OneHour = ({ scheduleData }) => {
  // TODO: data가 들어왔을때와 아닐때의 css가 다르도록 해주기
  // TODO: classname을 다르게해서 구별해주기
  function getContextArrary() {
    const contextArray = [];
    // for문의 제한 횟수는 변수
    return (<Content key={0} className={"context"} textContent={scheduleData.content}></Content>);
    /*
    for (let i = 0; i < 7; i++) {
      contextArray.push(<Content key={i} className={"context"} textContent={}></Content>)
    }
    

    return contextArray;
    */
  }

  return (
    <OneHourContainer>
      {getContextArrary()}
    </OneHourContainer>
  );
};

export default OneHour;
