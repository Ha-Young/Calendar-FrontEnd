import React from "react";
import styles from "./Events.module.css";

export default function Form({ onSubmit, inputValues, onChangeInputValues}) {
  const { date, title, detail, startAt, endAt } = inputValues;
  return (
    <form
      onSubmit={onSubmit} 
      className={`${styles.eventForm} ${styles.flexCenter}`}>
      <div
        className={styles.formField}
      >
        <div className={styles.inputGroup}>
          <label>
            DATE:
          </label>
          <input 
            type="date"
            name="date" 
            value={date}
            onChange={onChangeInputValues}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>
            TITLE:
          </label>
          <input 
            type="text"
            name="title" 
            value={title} 
            onChange={onChangeInputValues}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>
            DETAIL:
          </label>
          <input 
            type="text"
            name="detail"
            value={detail} 
            onChange={onChangeInputValues}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>
            START AT:
          </label>
          <input 
            type="time"
            name="startAt" 
            value={startAt} 
            onChange={onChangeInputValues}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>
            END AT:
          </label>
          <input 
            type="time"
            name="endAt" 
            value={endAt} 
            onChange={onChangeInputValues}
          />
        </div>
      </div>
      <input className={styles.submit} type="submit" />
    </form>
  );
}
