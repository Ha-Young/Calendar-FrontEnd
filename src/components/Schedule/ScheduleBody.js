import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import ScheduleTimeline from './ScheduleTimeline';
import ScheduleListContainer from '../../containers/ScheduleListContainer';

const Wrapper = styled.div`
  display: grid;
  border: 3px solid blue;
  overflow: scroll;
`;

export default function ScheduleBody ({ type }) {
  const [scrollRef, setScrollRef] = useState(useRef());

  useEffect (() => {
    scrollRef.current.addEventListener('scroll', () => {
      //Note: 구현 예정 중인 코드입니다
    });
  }, [scrollRef]);

  function renderByType () {
    if (type === 'weekly') {
      return (
        <Wrapper ref={scrollRef} style={{gridTemplateColumns: '8% 1fr',marginRight: '75px'}}>
          <ScheduleTimeline/>
          <ScheduleListContainer/>
        </Wrapper>
      );
    }
    
    return (
      <Wrapper ref={scrollRef} style={{gridTemplateColumns: '15% 1fr'}}>
        <ScheduleTimeline/>
        <ScheduleListContainer/>
      </Wrapper>
    );
  }

  return renderByType();
}
