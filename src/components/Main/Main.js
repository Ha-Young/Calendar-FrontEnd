import React from "react";
import styles from "./Main.module.scss";


const Main = ({children}) => {
  return (
    <div className={styles.Main}>
      {children}
    </div>
  );
};

export default Main;
