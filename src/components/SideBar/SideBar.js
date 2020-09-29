import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows:40% 1fr;
  padding-top: 20px;
`;

const Monthly = styled.div`
  display: grid;
  grid-template-rows:15% 1fr;
`;

const Month = styled.div`
  display: grid;
  grid-template-columns: 1fr 10% 10%;
`;

const Dates = styled.div`
  display:grid;
  grid-template-rows: repeat(7, 1fr);
`;

const Weeks = styled.div`
  display:grid;
  grid-template-columns: repeat(7, 1fr);
`;

const EveryDay = styled.div`
`;

export default function SideBar () {

  return (
    <Wrapper style={{border: "3px solid yellow"}}>
      
      <Monthly style={{border: "3px solid yellowgreen"}}>
        <Month style={{border: "3px solid green"}}>
          <div>september</div>
          <button>1</button>
          <button>2</button>
        </Month>
        <Dates>
          <Weeks style={{border: "3px solid tomato"}}>
            <EveryDay>월</EveryDay>
            <EveryDay>화</EveryDay>
            <EveryDay>수</EveryDay>
            <EveryDay>목</EveryDay>
            <EveryDay>금</EveryDay>
            <EveryDay>토</EveryDay>
            <EveryDay>일</EveryDay>
          </Weeks>
          <Weeks>1</Weeks>
          <Weeks>2</Weeks>
          <Weeks>3</Weeks>
          <Weeks></Weeks>
          <Weeks></Weeks>
          <Weeks></Weeks>
        </Dates>
      </Monthly>
      <div>3</div>
    </Wrapper>
  );
}