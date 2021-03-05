import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Error.module.css";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/string";

export default function Error({ text = DEFAULT_ERROR_MESSAGE }) {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/calendar");
    }, 1000);
  }, [history]);
  
  return(
    <div className={styles.wrapper}>
      <span>{text}</span>
    </div>
  );
}
