import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2000px;

  h3 {
    border-bottom: 1px solid black;
    text-align: center;
  }

  div {
    height: 200px;
    border: 1px solid ${({theme}) => theme.gray};
    text-align: center;
  }
`;

export default function DateBox({ date, event }) {
  return (
    <Container>
      <h3>{date.date}일</h3>
      <div className='0'>0h</div>
      <div className='1'>1h</div>
      <div className='2'>2h</div>
      <div className='3'>3h</div>
      <div className='4'>4h</div>
      <div className='5'>5h</div>
      <div className='6'>6h</div>
      <div className='7'>7h</div>
      <div className='8'>8h</div>
      <div className='9'>9h</div>
      <div className='10'>10h</div>
      <div className='11'>11h</div>
      <div className='12'>12h</div>
      <div className='13'>13h</div>
      <div className='14'>14h</div>
      <div className='15'>15h</div>
      <div className='16'>16h</div>
      <div className='17'>17h</div>
      <div className='18'>18h</div>
      <div className='19'>19h</div>
      <div className='20'>20h</div>
      <div className='21'>21h</div>
      <div className='22'>22h</div>
      <div className='23'>23h</div>
      <div className='24'>24h</div>
    </Container>
  );
}

Date.propTypes ={
  date: PropTypes.string.isRequired,
  event: PropTypes.array,
};
