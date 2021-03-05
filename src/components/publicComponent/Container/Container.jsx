import React from 'react';
import styles from './Container.module.scss';

const Container = ({ className, children, onClickEvent }) => {
  return (
    <div className={`${styles.container} ${className}`} onClick={onClickEvent}>
      {children}
    </div>
  )
}

export default Container;
