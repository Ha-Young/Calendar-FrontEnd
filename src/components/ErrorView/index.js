import { Modal } from "antd";
import React from "react";

import { ERROR_TITLE_DEFAULT } from "../../constants/errorMsg";
import styles from "./ErrorView.module.css";

function ErrorView(errMsg) {
  function errorView() {
    Modal.error({
      title: ERROR_TITLE_DEFAULT,
      content: errMsg,
    });
  }

  return (
    <div className={styles.errorWrapper} onLoad={errorView} />
  );
}

export default ErrorView;
