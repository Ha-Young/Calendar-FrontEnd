import React from "react";
import styles from "./Daily.module.css";

export default function Daily(props) {
  console.log('daily')
  console.log(props)

  return (
    <div>
      <div className={styles.daily_container}>
        <h1>FRI, 2</h1>
        <div className={styles.daily_time}
          onClick
        >
          GMT+09
        </div>
        <div className={styles.daily_time}>
          <div>8</div>
          <div className={styles.daily_event}>
            Go Home
          </div>
        </div>
        <div className={styles.daily_time}>
          <div>9</div>
        </div>
        <div className={styles.daily_time}>
          <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
          <div className={styles.daily_event}>
            Go School
          </div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
        <div className={styles.daily_time}>
        <div>10</div>
        </div>
      </div>
    </div>
  );
}
