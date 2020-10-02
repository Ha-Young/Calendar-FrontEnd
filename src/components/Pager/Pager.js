import React from 'react';
import DateInfo from '../DateInfo/DateInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Pager.module.css';

const Pager = ({ dateState, mode, pageBefore, pageNext }) => {
  return (
    <div className={styles.Pager}>
      <button onClick={() => pageBefore(mode)}>
        <FontAwesomeIcon icon={faChevronLeft}/>
      </button>
      <DateInfo dateState={dateState} mode={mode}/>
      <button onClick={() => pageNext(mode)}>
        <FontAwesomeIcon icon={faChevronRight}/>
      </button>
    </div>
  );
};

export default Pager;
