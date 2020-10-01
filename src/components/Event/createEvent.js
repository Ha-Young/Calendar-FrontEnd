import React from 'react';
import styled from 'styled-components';
import Input from '../Shared/Input';
import Button from '../Shared/Button';

const Wrapper = styled.div`
  display: grid;
  background-color: beige;
`;

export default function CreateEvent () {
  function trya (e) {
    console.log(e.target.value)
    console.log(1)
  }
  //아래의 인풋들 위의 컨테이너에서 모아서 스테이트로 만들기
  //이벤트 리듀서 만들기
  //스케쥴 리스트 컨테이너 만들기 > 작업해서 리스트에 뿌려주기
  //밑에 폼태그 
  //기본 주소를 /calendar 으로 하고 / 으로 들어오면 / 캘린더로 리디렉토리
  return (
    <Wrapper style={{border: '3px solid tomato'}}>
      {/* <form></form> */}
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
          <textarea
            rows='15'
            style={{width: '96%', marginLeft: '10px'}}
            onChange={trya}
          />
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