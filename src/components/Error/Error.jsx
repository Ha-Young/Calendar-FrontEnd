import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Error.module.css";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/string";

export default function Error({ text = DEFAULT_ERROR_MESSAGE }) {
  const history = useHistory();

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      history.push("/calendar");
    }, 2000);
  
    return () => window.clearTimeout(timerId);
  }, [history]);
  
  return(
    <div className={styles.wrapper}>
      <span>{text}</span>
    </div>
  );
}
