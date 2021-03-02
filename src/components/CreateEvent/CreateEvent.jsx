import React from "react";
import styles from "./CreateEvent.module.css";

export default function CreateEvent() {
  return (
    <div className={styles.wrapper}>
      <form action="">
        <div className={styles.formArea}>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>Title:</div>
            <div className={styles.formRightItem}><input type="text" /></div>
          </div>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>Description:</div>
            <div className={styles.formRightItem}><textarea name="message" rows="10" cols="30" /></div>
          </div>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>Start</div>
            <div className={styles.formRightItem}><input type="datetime-local" /></div>
          </div>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>End</div>
            <div className={styles.formRightItem}><input type="datetime-local" /></div>
          </div>
          <div className={styles.formButtonWrapper}>
            <p>시간은 정각 단위로 버림되어 입력됩니다. 분 단위는 입력해도 적용되지 않습니다.</p>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
