import React from 'react';
import styled from "styled-components";
import styles from './ScheduleHeader.module.css';

const HeaderTitle = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;
const HeaderDate = styled.div`
  font-size: 25px;
  color: #bdbdbd;
`;

const ScheduleHeader = ({ day, date }) => {
  return (
    <div className={styles.ScheduleHeader}>
      <HeaderTitle>{day}</HeaderTitle>
      <HeaderDate>{date}</HeaderDate>
    </div>
  );
};

export default ScheduleHeader;