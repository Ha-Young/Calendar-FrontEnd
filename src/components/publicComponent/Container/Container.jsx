import React from 'react';
import styles from './Container.module.scss';

const Container = ({ className, children, onClickEvent, id }) => {
  return (
    <div className={`${className} ${styles.container}`} onClick={onClickEvent} id={id}>
      {children}
    </div>
  )
}

export default Container;
