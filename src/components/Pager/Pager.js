import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styles from './Pager.module.css';

const Pager = () => {
  return (
    <div className={styles.Pager}>
      <button>
        <FontAwesomeIcon icon={faChevronLeft}/>
      </button>
      <button>
      <FontAwesomeIcon icon={faChevronRight}/>
      </button>
    </div>
  );
};

export default Pager;