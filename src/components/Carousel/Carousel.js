import React, { Fragment } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { getFormat, parseDate } from "../../api/date";
import "./style.css";

export default function Carousel({ currentPageDate, handleClickLeft, handleClickRight }) {
  const date = parseDate(getFormat(currentPageDate));
  return (
    <Fragment>
      <div className="arrow-container">
        <AiOutlineArrowLeft className="previous" onClick={handleClickLeft}/>
        <span>{date.year}년</span>
        <span>{date.month}월</span>
        <span>{date.date}일</span>
        <AiOutlineArrowRight className="next" onClick={handleClickRight} />
      </div>
    </Fragment>
  );
}
