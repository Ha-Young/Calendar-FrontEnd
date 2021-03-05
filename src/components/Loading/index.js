import React from "react";
import ReactLoading from "react-loading";

import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <ReactLoading type="spin" />
    </div>
  );
}

export default Loading;
