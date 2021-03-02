import React from "react";

import styles from "./Events.module.css";

export default function Form(props) {
  const {
    title,
    detail,
    startAt,
    endAt,
    onTitleChange,
    onDetailChange,
    onStartAtChange,
    onEndAtChange,
    onSubmit,
   } = props;

  return (
    <form
      onSubmit={onSubmit} 
      className={`${styles.eventForm} ${styles.flexCenter}`}>
      <label for="title">
        EVENT TITLE:
        <input 
          type="text"
          id="title" 
          value={title} 
          onChange={(e) => onTitleChange(e.target.value)} 
        />
      </label>
      <label for="detail">
        EVENT DETAIL:
        <input 
          type="text"
          id="detail"
          value={detail} 
          onChange={(e) => onDetailChange(e.target.value)}
        />
      </label>
      <label for="startAt">
        EVENT START AT:
        <input 
          type="datetime-local" 
          id="startAT" 
          value={startAt} 
          onChange={(e) => onStartAtChange(e.target.value)} 
        />
      </label>
      <label for="endAt">
        EVENT END AT:
        <input 
          type="datetime-local"
          id="endAt" 
          value={endAt} 
          onChange={(e) => onEndAtChange(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
