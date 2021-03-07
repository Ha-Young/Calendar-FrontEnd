import React from 'react';
import styles from './ContentLayout.module.scss';

import OneHour from './OneHour/OneHour';

const ContentLayout = ({ todayData, isWeek, callback }) => {
  function getOneHourArray() {
    const twentyFourHourArray = todayData.timeArray;
    const datas = todayData.datas || {};

    Object.values(datas).forEach((el) => {
      for (let i = el.startHour; i <= el.endHour; i++ ) {
        twentyFourHourArray[i] = el;
      }
    });
    
    return twentyFourHourArray.map((eachHour, i) => {
      let isEdge = 0;
      if (eachHour.startHour === i) isEdge = 1;
      else if (eachHour.endHour === i) isEdge = -1;
      return (
        <OneHour 
          key={i} 
          oneData={eachHour} 
          edgeFlag={isEdge} 
          isWeek={isWeek} 
          callback={callback}
        />);
    });
  }

  return (
    <div className={styles.contentLayoutContainer}>
      {getOneHourArray()}
    </div>
  );
};

export default ContentLayout;
