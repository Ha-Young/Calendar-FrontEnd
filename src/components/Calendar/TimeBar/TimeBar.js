import React from 'react';
import styles from './TimeBar.module.css';

export default function TimeBar() {
  const TIME = ['오전 1시', '오전 2시', '오전 3시', '오전 4시', '오전 5시', '오전 6시', '오전 7시', '오전 8시', '오전 9시', '오전 10시', '오전 11시', '오후 12시', '오후 1시', '오후 2시', '오후 3시', '오후 4시', '오후 5시', '오후 6시', '오후 7시', '오후 8시', '오후 9시', '오후 10시', '오후 11시', '오전 12시'];

  return (
    <ul className={styles.TimeBar}>
      {
        TIME.map(time => {
          return (
            <li key={time}>{time}</li>
          );
        })
      }
    </ul>
  );
}