import React from 'react';
import styles from './TimeLayout.module.scss';

import Content from '../../../publicComponent/Content/Content';

const TimeLayout = () => {
  function makeOneHourString(index) {
    const fromHour = index / 10 < 1 ? `0${index}` : index;

    return (`${fromHour}:00`);
  }

  function getContentArray() {
    const contentArray = [];
    for (let i = 0; i < 24; i++) {
      contentArray.push(<Content key={i} className={styles.time} textContent={makeOneHourString(i)} hover={false} />)
    }

    return contentArray;
  }

  return (
    <div className={styles.timeLayoutContainer}>
      {getContentArray()}
    </div>
  );
};

export default TimeLayout;
