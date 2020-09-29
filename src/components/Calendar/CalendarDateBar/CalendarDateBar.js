import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 35% 1fr;
  padding-right: 10px;
`;

const C1 = styled.div`
  display:grid;
  grid-template-columns: 5.5% 1fr 6%;
`;


const Day = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-top: 20px;
`;

export default function CalendarDateBar () {

  return (
    <Wrapper>
      <C1>
      <div>1</div>
      <Day>
        <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        <div>일</div>
      </Day>
      <div>3</div>
      </C1>
      <C1>
      <div style={{border:"1px solid black"}}>버튼</div>
      <Day style={{paddingTop:"10px"}}>
      
        <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
        <div>17</div>
      </Day>
      <div style={{border:"1px solid black"}}>버튼</div>
      </C1>
      
    </Wrapper>
  );
}







  
