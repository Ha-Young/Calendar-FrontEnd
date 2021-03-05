import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Content from '../../../../publicComponent/Content/Content';

const OneHourContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  border-right: solid 1px black;
  text-align: center;

  a {
    width: 99%;
    text-decoration: none;
    color: inherit;
  }
`;

const OneHour = ({ oneData, isEdge, isWeek, callback }) => {
  console.log('ONEHOUR : ', oneData);
  let color;
  let content;
  let onClickEvent = null;
  let key = null;
  if (oneData) {
    color = oneData.color;
    content = !isWeek && isEdge === 1 ? oneData.content : '';
    onClickEvent = callback(oneData);
    key = oneData.key;
  }

  const contentJSX = (
    <Content 
        className={"context"} 
        textContent={content} 
        color={color}
        borderFlg={isEdge}
        onClickEvent={onClickEvent}
      />
  );

  return (
    <OneHourContainer>
      {onClickEvent ? <Link to={`/event/${key}`}>{contentJSX}</Link> : contentJSX}
    </OneHourContainer>
  );
};

export default OneHour;
