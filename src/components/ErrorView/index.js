import React, { useEffect, useState } from "react";

import { ERROR_TITLE_DEFAULT } from "../../constants/error";
import styles from "./ErrorView.module.css";

function ErrorView({ errMsg, onErrorViewTimeEnd, viewSecond }) {
  const [leftTime, setLeftTime] = useState(viewSecond);

  useEffect(() => {
    const timeoutId = window.setTimeout(onErrorViewTimeEnd, leftTime * 1000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (leftTime === 1) {
        onErrorViewTimeEnd();
      }
      setLeftTime(leftTime - 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [leftTime, onErrorViewTimeEnd]);

  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorView}>
        <h2>{ERROR_TITLE_DEFAULT}</h2>
        {errMsg}
        <span>{`${leftTime} 초 후에 이 메세지는 사라집니다.`}</span>
      </div>
    </div>
  );
}

export default ErrorView;
