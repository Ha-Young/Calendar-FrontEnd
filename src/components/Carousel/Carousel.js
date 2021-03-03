import React, { Fragment } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

export default function Carousel({ date }) {
  return (
    <Fragment>
      <div className="arrow-container">
        <span className="arrow"><AiOutlineArrowLeft /></span>
        <span>{date}</span>
        <span className="arrow"><AiOutlineArrowRight /></span>
      </div>
    </Fragment>
  );
}
