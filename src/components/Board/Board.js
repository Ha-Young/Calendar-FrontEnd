import React from "react";
import BoardHeader from "./BoardHeader";
import BoardSideBar from "./BoardSideBar";
import Bar from "../Bar/Bar";
import styles from "./Board.module.css";
import { hours } from "../../utils/date";

const Board = ({ content }) => {
  return (
    <div className={styles.wrapper}>
      <BoardHeader />
      <div className={styles.content}>
        <BoardSideBar />
        <Bar content={hours} />
        <Bar content={hours} />
        <Bar content={hours} />
        <Bar content={hours} />
        <Bar content={hours} />
        <Bar content={hours} />
        <Bar content={hours} />
      </div>
    </div>
  );
};

export default Board;