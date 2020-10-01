import React, {useEffect, useState, useRef} from 'react';
import { useRouteMatch } from 'react-router-dom'
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

  useEffect (()=>{
    scrollRef.current.addEventListener('scroll', () => {
      console.log(1)
    })
  }, [scrollRef]);

  function renderByType () {
    if (type === 'weekly') {
      return (
        <Wrapper ref={scrollRef} style={{gridTemplateColumns: '8% 1fr 6.8%'}}>
          <ScheduleTimeline />
          <ScheduleListContainer type={type} />
          <div></div>
        </Wrapper>
      );    
    }

    return (
      <Wrapper ref={scrollRef} style={{gridTemplateColumns: '15% 1fr'}}>
        <ScheduleTimeline />
        <ScheduleListContainer type={type} />
      </Wrapper>
    );
  }

  return renderByType();
}
