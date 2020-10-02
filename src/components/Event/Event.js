import React from 'react';
import styled from 'styled-components';
import styles from './Event.module.css';

const EventWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.details["details_time"]["start_time"] * 42}px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: ${(props) => props.details["details_time"]["during_time"] * 42}px;
  background: ${(props) => props.bgColor};
  border-radius: 5px;
  z-index: 99;
  cursor: pointer;
`;
const Event = ({ details, bgColor }) => {
  const {
    details_title,
    details_description,
  } = details;

  return (
    <EventWrapper details={details} bgColor={bgColor}>
      <div className={styles.DetailTitleWrapper}>{details_title}</div>
      <div className={styles.DetailDescriptionWrapper}>{details_description}</div>
    </EventWrapper>
  );
};

export default Event;
