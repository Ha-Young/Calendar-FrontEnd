import React from "react";

import { RiErrorWarningFill } from "react-icons/ri";
import styles from "./PageNotFound.module.scss";

export default function PageNotFound() {
  return (
    <div className={styles.PageNotFound}>
      <RiErrorWarningFill className={styles.icon}/>
      <p className={styles.title}>Page Not Found</p>
      <p>존재하지 않는 페이지입니다.</p>
    </div>
  )
}
