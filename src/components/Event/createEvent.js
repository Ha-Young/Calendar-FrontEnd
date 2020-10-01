import React from 'react';
import styled from 'styled-components';
import Input from '../Shared/Input';
import Button from '../Shared/Button';

const Wrapper = styled.div`
  display: grid;
  background-color: beige;
`;

export default function CreateEvent () {
  // 새로운 일정은 크리에이트 버튼으로 추가
  // 기존일정의 디테일 확인은 기존 일정 클릭
  return (
    <Wrapper style={{border: '3px solid tomato'}}>
        <div style={{textAlign: 'center'}}>
          <div>이벤트 제목</div>
          <Input></Input>
        </div>
        <div>
          <Button>create</Button>
          <Button>update</Button>
          <Button>delete</Button>
        </div>
        <div>
          <div>이벤트내용</div>
          <textarea rows='15' style={{width: '96%', marginLeft: '10px'}}></textarea>
        </div>
        <div>
          <div>이벤트 시작 날짜 및 시간</div>
          <Input></Input>
        </div>
        <div>
          <div>이벤트 종료 날짜 및 시간</div>
          <Input></Input>
        </div>
    </Wrapper>
  );
}