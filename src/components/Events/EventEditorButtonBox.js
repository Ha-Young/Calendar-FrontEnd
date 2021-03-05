import React from "react";
import styles from "./EventEditor.module.css";
import { Link } from "react-router-dom";


export default function EventEditorButtonBox(props) {
  const { 
    isReadMode, 
    isUpdateMode, 
    linkToEdit, 
    onDeleteClick 
  } = props;
  
  if (isReadMode) {
    return (
      <div className={styles.ButtonBox}>
        <Link to={linkToEdit} className={styles.Link}>
          <button 
            className={styles.Button} 
            type="button"
          >
            Edit Event
          </button>
        </Link>
        <button 
          className={styles.Button} 
          type="button"
          onClick={onDeleteClick}
        >
          Delete Event
        </button>
      </div>
    );
  } 

  return (
    <div className={styles.ButtonBox}>
      <button className={styles.Button} type="submit">
        {isUpdateMode ? "Update Event" : "Create Event"}
      </button>
    </div>
  );
}
