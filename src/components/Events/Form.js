import React from "react";
import styles from "./Events.module.css";

export default function Form({ onSubmit, inputValues, onChangeInputValues}) {
  const { date, title, detail, startAt, endAt } = inputValues;
  return (
    <form
      onSubmit={onSubmit} 
      className={`${styles.eventForm} ${styles.flexCenter}`}>
      <label>
        DATE:
        <input 
          type="date"
          name="date" 
          value={date}
          onChange={onChangeInputValues}
        />
      </label>
      <label>
        TITLE:
        <input 
          type="text"
          name="title" 
          value={title} 
          onChange={onChangeInputValues}
        />
      </label>
      <label>
        DETAIL:
        <input 
          type="text"
          name="detail"
          value={detail} 
          onChange={onChangeInputValues}
        />
      </label>
      <label>
        START AT:
        <input 
          type="time"
          name="startAt" 
          value={startAt} 
          onChange={onChangeInputValues}
        />
      </label>
      <label>
        END AT:
        <input 
          type="time"
          name="endAt" 
          value={endAt} 
          onChange={onChangeInputValues}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
