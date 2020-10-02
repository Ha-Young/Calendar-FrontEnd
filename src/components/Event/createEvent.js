import React from 'react';
import styled from 'styled-components';
import Input from '../Shared/Input';
import Button from '../Shared/Button';

const Wrapper = styled.div`
  display: grid;
  background-color: beige;
`;

export default function CreateEvent ({ onSubmit }) {

  return (
    <Wrapper style={{border: '3px solid tomato'}}>
      <form onSubmit={onSubmit}>
        <div>
          <div>이벤트 제목</div>
          <Input name='title'></Input>
        </div>
        <div>
          <Button type='submit'>submit</Button>
          <input type='radio' id='create' name='eventChange' value='create'/>
          <label for='create'>create</label>
          <input type='radio' id='update' name='eventChange' value='update'/>
          <label for='update'>update</label>
          <input type='radio' id='delete' name='eventChange' value='delete'/>
          <label for='delete'>delete</label>
        </div>
        <div>
          <div>이벤트내용</div>
          <textarea
            name='desc'
            rows='15'
            style={{width: '96%', marginLeft: '10px'}}
          />
        </div>
        <div>
          <div>이벤트 시작 날짜 및 시간</div>
          <Input name='eventStart' placeholder='yyyymmddhhmm'></Input>
        </div>
        <div>
          <div>이벤트 종료 날짜 및 시간</div>
          <Input name='eventEnd' placeholder='yyyymmddhhmm'></Input>
        </div>
      </form>
    </Wrapper>
  );
}
