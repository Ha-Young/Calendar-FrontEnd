import React from 'react';
import Icon from '../../publicComponent/Icon/Icon';
import styles from './ToggleIcon.module.scss';

const ToggleIcon = ({ iconClassName, textContent, fontSize }) => {
  return (
    <div className={styles.toggleIcon}>
      <Icon className={iconClassName} fontSize={fontSize}>
      </Icon>
      <span className={styles.toggleIcon__text}>{textContent}</span>
    </div>
  );
}

export default ToggleIcon;
