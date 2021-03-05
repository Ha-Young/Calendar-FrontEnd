import React from "react";
import "./style.css";

export default function Modal({selected, setIsModalShown}) {

  return (
    <div className="modal-container">
      <div onClick={() => {setIsModalShown(false)}}>x</div>
      <div className="modal-content-container">
        <div>{selected.title}</div>
        <div>{selected.date}</div>
        <div>{selected.description}</div>
        </div>
    </div>
  );
}
