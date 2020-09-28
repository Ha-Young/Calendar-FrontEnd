import React from 'react';
import Hour from './Hour/Hour';
import styles from './Day.module.css';

export default function Day() {
  const TIME = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

  return (
    <div className={styles.Day}>
      <div>
        {"29일 화요일"}
      </div>
      {
        TIME.map(time => {
          return (
            <Hour key={time} />
          );
        })
      }
    </div>
  );
}