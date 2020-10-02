import React from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from '../styled';

export default function Modal () {
  const { scheduleId } = useParams();
  console.log(scheduleId);

  return (
    <>
      <Styled.Overlay />
      <Styled.Modal>
        <div>모달입니다..</div>
      </Styled.Modal>
    </>
  );
}
