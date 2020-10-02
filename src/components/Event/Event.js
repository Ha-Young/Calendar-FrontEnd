import React from "react";
import { Link } from "react-router-dom";
import styles from "./Event.module.css";

export default function Event({
  id,
  title,
  date,
  start,
  finish,
  onClick,
}) {
  return (
    <Link to={`/events/:${id}`}>
      <div className={styles.Event} onClick={onClick}>
        <h5>{title}</h5>
      </div>
    </Link>
  );
}