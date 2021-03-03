import React from 'react';
import { LEFT } from '../../constants/constants';
import styles from './DateNavigator.module.scss';

import Icon from '../publicComponent/Icon/Icon';

const LEFT_CLASSNAME = 'fas fa-chevron-left';
const RIGHT_CLASSNAME = 'fas fa-chevron-right';

const DateNavigator = ({ direction, onClick }) => {
  function getDateNavigatorAttributes() {
    const attributes = {};
    if (direction === LEFT) {
      attributes.iconClassName = LEFT_CLASSNAME;
      attributes.id = styles.left;
      attributes.isForward = false;
    } else {
      attributes.iconClassName = RIGHT_CLASSNAME;
      attributes.id = styles.right;
      attributes.isForward = true;
    }

    return attributes;
  }
  const attributes = getDateNavigatorAttributes();

  return (
    <div 
      className={styles.navigator} 
      id={attributes.id} 
      onClick={() => onClick(attributes.isForward)}
    >
      <Icon className={attributes.iconClassName}></Icon>
    </div>
  );
}

export default DateNavigator;
