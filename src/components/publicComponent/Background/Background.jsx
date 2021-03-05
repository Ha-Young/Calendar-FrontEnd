import React from 'react';
import styles from './Background.module.scss';

const Background = ({ id, children }) => {
  return (
    <div className={styles.background} id={id}>
      {children}
    </div>
  );
}

export default Background;
