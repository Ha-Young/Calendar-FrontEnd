import React from 'react';
import styles from './TimeInputForm.module.scss';

const TimeInputForm = ({ selectionType, onchanegeEvent, value }) => {
  function getOptionTag() {
    const optionTags = Array(24).fill(0);

    return optionTags.map((_, index) => {
      const textContent = (index / 10) < 1 ? `0${index}` : index;
      return (<option key={index} value={index} selected={value === textContent}>{textContent}</option>);
    });
  }

  return (
    <div className={styles.seletInputWrapper}>
      <select name={selectionType} onChange={onchanegeEvent}>
        {getOptionTag()}
      </select>
    </div>
  );
};

export default TimeInputForm;
