import React from "react";
import styles from "./Bar.module.css";
import Card from "../Card/Card";

const Bar = ({ length, content }) => {
  console.log(content);
  return (
    <div className={styles.wrapper}>
      {length?.map((item) => (
        <div key={item} className={styles.block} value={item} />
      ))}
      {content?.map((data) => (
        data && <Card content={data} key={data.id} />
      ))}
    </div>
  );
};

export default Bar;
