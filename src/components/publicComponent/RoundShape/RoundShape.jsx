import React from 'react';
import styles from './RoundShape.module.scss';

const RoundShape = ({ className, textContext }) => {
  return (
    <div className={`${styles.roundShapeWrapper} ${className}`}>
      {textContext}
    </div>
  );
};

export default RoundShape;
