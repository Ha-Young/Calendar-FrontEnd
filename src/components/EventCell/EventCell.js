import React from 'react';
import styled from 'styled-components';
import styles from './EventCell.module.css';

const EventWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.details["time"]["startTime"] * 42}px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: ${(props) => props.details["time"]["duringTime"] * 42}px;
  background: ${(props) => props.bgColor};
  border-radius: 5px;
  z-index: 99;
  cursor: pointer;
`;
const EventCell = ({ details, bgColor }) => {
  const {
    title,
    description,
  } = details;

  return (
    <EventWrapper details={details} bgColor={bgColor}>
      <div className={styles.EventTitleWrapper}>{title}</div>
      <div className={styles.EventDescriptionWrapper}>{description}</div>
    </EventWrapper>
  );
};

export default EventCell;
