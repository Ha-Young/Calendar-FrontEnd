import React from "react";
import BoardHeader from "./BoardHeader";
import BoardSideBar from "./BoardSideBar";
import Bar from "../Bar/Bar";
import styles from "./Board.module.css";
import { hours } from "../../utils/date";

const Board = ({ headerData, content }) => {
  return (
    <div className={styles.wrapper}>
      <BoardHeader nav={headerData} />
      <div className={styles.content}>
        <BoardSideBar />
        {content?.map((data, index) => (
          <Bar key={index} content={data} length={hours} />
        ))}
      </div>
    </div>
  );
};

export default Board;
