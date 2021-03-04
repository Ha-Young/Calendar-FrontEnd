import React from "react";
import BoardHeader from "./BoardHeader";
import BoardSideBar from "./BoardSideBar";
import Bar from "../Bar/Bar";
import styles from "./Board.module.css";
import { hours } from "../../utils/date";

const Board = ({ headerData, getEventByCurrentDate }) => {
  return (
    <div className={styles.wrapper}>
      <BoardHeader nav={headerData} />
      <div className={styles.content}>
        <BoardSideBar />
        {headerData?.map((date, index) => (
          <Bar key={index} content={getEventByCurrentDate(date)} length={hours} />
        ))}
      </div>
    </div>
  );
};

export default Board;
