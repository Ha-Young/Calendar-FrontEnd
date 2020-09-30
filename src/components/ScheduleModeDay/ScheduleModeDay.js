import React from 'react';
import styled from 'styled-components';
import styles from './ScheduleModeDay.module.css';
import ScheduleHeader from '../ScheduleHeader/ScheduleHeader';
import ScheduleItem from '../ScheduleItem/ScheduleItem';

const ViewHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const TimeWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
`;

const ScheduleModeDay = () => {
  return (
    <div className={styles.ScheduleModeDay}>
      <ViewHeader>
        <ScheduleHeader />
      </ViewHeader>
      <TimeWrapper>
        <ScheduleItem />
      </TimeWrapper>
    </div>
  );
};

export default ScheduleModeDay;