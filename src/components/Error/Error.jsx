import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
  
  const history = useHistory();

  useEffect(() => {
    debugger;
    setTimeout(() => {
      history.push("/calendar");
    }, 1000);
  }, [])
  
  return(
    <div className={styles.wrapper}>
      <span>잘못된 접근입니다. 홈페이지로 돌아갑니다.</span>
    </div>
  );
}
