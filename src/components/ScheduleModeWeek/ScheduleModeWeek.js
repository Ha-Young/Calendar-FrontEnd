import React from 'react';
import styles from './ScheduleModeWeek.module.css';
import styled from "styled-components";
import ScheduleHeader from '../ScheduleHeader/ScheduleHeader';
import ScheduleItem from '../ScheduleItem/ScheduleItem';

const days = [ "일", "월", "화", "수", "목", "금", "토" ];
const ViewHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const TimeWrapper = styled.div`
  width: 100%;
  height: 900px;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
`;

const ScheduleModeWeek = ({ dateObj, weekState }) => {
  return (
    <div className={styles.ScheduleModeWeek}>
      <ViewHeader>
        { days.map((day, i) => <ScheduleHeader day={day} date={weekState.weekDates[i]}/>)}
      </ViewHeader>
      <TimeWrapper>
        { days.map(() => <ScheduleItem />)}
      </TimeWrapper>
    </div>
  );
};

export default ScheduleModeWeek;