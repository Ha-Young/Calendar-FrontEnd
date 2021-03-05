import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import styles from "./PageNotFound.module.scss";

export default function PageNotFound({ text }) {
  return (
    <div className={styles.PageNotFound}>
      <RiErrorWarningFill className={styles.icon} />
      <p className={styles.title}>Page Not Found</p>
      <p>{text}</p>
    </div>
  );
}
