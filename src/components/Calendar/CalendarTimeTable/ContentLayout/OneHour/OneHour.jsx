import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OneHour.module.scss';

import Content from '../../../../publicComponent/Content/Content';

const OneHour = ({ oneData, edgeFlag, isWeek, callback }) => {
  let color;
  let content;
  let onClickEvent = null;
  let key = null;
  if (oneData) {
    color = oneData.color;
    content = !isWeek && edgeFlag === 1 ? oneData.content : '';
    onClickEvent = callback(oneData);
    key = oneData.key;
  }

  const contentJSX = (
    <Content 
      className="context" 
      textContent={content} 
      color={color}
      borderFlag={edgeFlag}
      onClickEvent={onClickEvent}
    />
  );

  return (
    <div className={styles.oneHourContainer}>
      {onClickEvent ? <Link to={`/event/${key}`}>{contentJSX}</Link> : contentJSX}
    </div>
  );
};

export default OneHour;
