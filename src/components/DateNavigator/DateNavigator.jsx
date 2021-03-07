import React from 'react';
import { LEFT } from '../../constants/constants';
import styles from './DateNavigator.module.scss';

import Icon from '../publicComponent/Icon/Icon';

const LEFT_CLASSNAME = 'fas fa-chevron-left';
const RIGHT_CLASSNAME = 'fas fa-chevron-right';

const DateNavigator = ({ direction, onClick }) => {
  const isLeftDirection = direction === LEFT;

  const dateNavigatorAttributes = {
    iconClassName: isLeftDirection ? LEFT_CLASSNAME : RIGHT_CLASSNAME,
    id: isLeftDirection ? styles.left : styles.right,
    isForward : isLeftDirection ? false : true,
  };

  return (
    <div 
      className={styles.navigator} 
      id={dateNavigatorAttributes.id} 
      onClick={() => onClick(dateNavigatorAttributes.isForward)}
    >
      <Icon className={dateNavigatorAttributes.iconClassName} />
    </div>
  );
}

export default DateNavigator;
