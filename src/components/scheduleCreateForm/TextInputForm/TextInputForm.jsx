import React from 'react';
import styles from './TextInputForm.module.scss';

const TextInputForm = ({ onChangeEvent, value, placeHolder }) => {
  return (
    <div className={styles.textInputWrapper}>
      <input 
        type="text" 
        onChange={onChangeEvent} 
        value={value} 
        placeholder={placeHolder} 
      />
    </div>
  )
}

export default TextInputForm;
