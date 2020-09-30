import React from 'react';
import styled from 'styled-components';
import styles from './ScheduleItem.module.css';

import ScheduleTimeItemContainer from '../../containers/ScheduleTimeItemContainer';

const ScheduleTimeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const countArr = new Array(24).fill();
const ScheduleItem = () => {
  return (
    <div className={styles.ScheduleItem}>
      <ScheduleTimeWrapper>
        {countArr.map((_, i) => <ScheduleTimeItemContainer />)}
      </ScheduleTimeWrapper>
    </div>
  );
};

export default ScheduleItem;