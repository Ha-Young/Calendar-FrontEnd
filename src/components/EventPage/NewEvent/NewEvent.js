import React from "react";
import { PLACEHOLDER } from "../../../constants/newEvent";
import { TIME } from "../../../constants/time";
import styles from "./NewEvent.module.css";

function NewEvent() {
  return (
    <>
      <h1>new event</h1>
      <div className={styles.eventContainer}>
        <form>
          <textarea
            className={styles.title}
            autoComplete="off"
            aria-label={PLACEHOLDER.TITLE}
            placeholder={PLACEHOLDER.TITLE}
          />
          <textarea
            className={styles.description}
            autoComplete="off"
            aria-label={PLACEHOLDER.DESCRIPTION}
            placeholder={PLACEHOLDER.DESCRIPTION}
          />
          <div className={styles.timeSelector}>
            <select>
              {TIME.map(time => (
                <option value={time} key={time}>
                  {time}
                </option>
               ))}
            </select>
            <select>
              {TIME.map(time => (
                <option value={time} key={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <button type='submit'>Add Event</button>
        </form>
      </div>
      </>
  );
}

export default NewEvent;
