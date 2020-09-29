import React, { useState } from 'react';
import styles from './Calendar.module.css';

function Calendar () {
  const [date, setDate] = useState('');

  return (
    <div className={styles.Outline}>
      <div className={styles.Daily}>
      </div>
      <div className={styles.Box}>
        <div className={styles.Timeline}>
          <div className={styles.Time}></div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 1시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 2시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 3시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 4시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 5시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 6시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 7시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 8시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 9시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 10시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오전 11시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 12시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 1시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 2시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 3시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 4시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 5시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 6시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 7시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 8시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 9시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 10시</span>
          </div>
          <div className={styles.Time}>
            <span className={styles.Hour}>오후 11시</span>
          </div>
        </div>
        <div className={styles.Todoline}>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
          <div className={styles.Todo}></div>
        </div>
        </div>
    </div>
  );
}

export default Calendar;
