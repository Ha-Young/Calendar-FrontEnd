import React from 'react';
import styles from './TimeLayout.module.scss';

import Content from '../../../publicComponent/Content/Content';

function makeOneHourString(index) {
  const fromHour = index / 10 < 1 ? `0${index}` : index;

  return `${fromHour}:00`;
}

const TimeLayout = () => {
  return (
    <div className={styles.timeLayoutContainer}>
      {Array(24).map((_, i) => <Content key={i} className={styles.time} textContent={makeOneHourString(i)} hover={false} />)}
    </div>
  );
};

export default TimeLayout;
