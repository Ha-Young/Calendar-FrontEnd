import React from "react";

import styles from "./Events.module.css";

export default function Form(props) {
  const {
    // date,
    // title,
    // detail,
    // startAt,
    // endAt,
    // onDateChange,
    // onTitleChange,
    // onDetailChange,
    // onStartAtChange,
    // onEndAtChange,
    // onSubmit,
    inputValues,
    onChangeInputValues,
   } = props;

  return (
    <form
      // onSubmit={onSubmit} 
      className={`${styles.eventForm} ${styles.flexCenter}`}>
      <label>
        DATE:
        <input 
          type="date"
          id="date" 
          // value={date}
          // onChange={(e) => onDateChange(e.target.value)}
          onChange={onChangeInputValues}
        />
      </label>
      {/* <label>
        EVENT TITLE:
        <input 
          type="text"
          id="title" 
          value={title} 
          onChange={(e) => onTitleChange(e.target.value)} 
        />
      </label>
      <label>
        EVENT DETAIL:
        <input 
          type="text"
          id="detail"
          value={detail} 
          onChange={(e) => onDetailChange(e.target.value)}
        />
      </label>
      <label>
        EVENT START AT:
        <input 
          type="time" 
          id="startAT" 
          value={startAt} 
          onChange={(e) => onStartAtChange(e.target.value)} 
        />
      </label>
      <label>
        EVENT END AT:
        <input 
          type="time"
          id="endAt" 
          value={endAt} 
          onChange={(e) => onEndAtChange(e.target.value)}
        />
      </label> */}
      <input type="submit" />
    </form>
  );
}
