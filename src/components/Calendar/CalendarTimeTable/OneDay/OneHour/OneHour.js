import React from 'react';
import styled from 'styled-components';

import Content from '../../../../publicComponent/Content/Content';

const OneHourContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  border-right: solid 1px black;
  text-align: center;
`;

const OneHour = ({ oneData, isEdge, isWeek }) => {
  // TODO: data가 들어왔을때와 아닐때의 css가 다르도록 해주기
  // TODO: style 전략: classname을 다르게해서 구별해주기
  console.log('ONEHOUR : ', oneData);
  let color;
  let content;
  let borderFlg;
  if (oneData) {
    color = oneData.color;
    content = !isWeek && isEdge === 1 ? oneData.content : '';
  }

  return (
    <OneHourContainer>
      <Content 
        className={"context"} 
        textContent={content} 
        color={color}
        hover={true}
        borderFlg={isEdge}
      />
    </OneHourContainer>
  );
};

export default OneHour;
