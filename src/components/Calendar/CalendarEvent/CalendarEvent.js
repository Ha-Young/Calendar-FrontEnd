import React from 'react';
import styled from 'styled-components';
import Modal from '../../Shared/Modal/Modal';
import { Route, Switch } from 'react-router-dom';

const Wrapper = styled.div`
  
  
`;

export default function CalendarEvent () {

  return (
    <Wrapper style={{border: "5px solid tomato"}}>
          <Route path="/event/create">
        <div>
          <Modal />
        </div> 
      </Route>

      <Route path="/event/detail">
        <div>
          <Modal />
        </div> 
      </Route>
    </Wrapper>
  );
}