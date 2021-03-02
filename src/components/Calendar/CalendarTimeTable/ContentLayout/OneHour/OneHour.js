import React from 'react';
import styled from 'styled-components';

const OneHourContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  text-align: center;
  border-bottom: solid 1px;

  .context {
    width: 100%;
    border: solid 1px red;
  }
`;

const OneHour = () => {
  return (
    <OneHourContainer>
      <div className="context">style</div>
      <div className="context">style</div>
      <div className="context">style</div>
      <div className="context">style</div>
      <div className="context">style</div>
      <div className="context">style</div>
      <div className="context">style</div>
    </OneHourContainer>
  );
};

export default OneHour;
