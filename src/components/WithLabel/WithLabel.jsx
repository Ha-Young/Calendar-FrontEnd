import React from "react";

import styles from "./WithLabel.module.css";

function WithLabel({ label, children }) {
  return (
    <div className={styles.withLabel}>
      <label>{label}</label>
      {children}
    </div>
  );
}

export default WithLabel;
