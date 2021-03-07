import React from 'react';
import styles from './ButtonComponent.module.scss'

const ButtonComponent = ({ className, onClickEvent, textContent }) => {
  return (
    <div className={`${styles.buttonWrapper} ${className}`}>
      <input type="button" onClick={onClickEvent} value={textContent} />
    </div>
  )
}

export default ButtonComponent;
