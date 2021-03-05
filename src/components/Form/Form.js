import React, { useState } from "react";
import { saveNewRecord } from "../../api";
import "./style.css";

function Form ({ submitData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    submitData(date, {title, description, date, startHour, endHour});
    saveNewRecord(date, {title, description, date, startHour, endHour});
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <div>새로운 이벤트</div>
      <input 
        type="text" 
        className="title" 
        placeholder="제목" 
        onChange={(event) => {setTitle(event.target.value)}} 
      />
      <input 
        type="date" 
        className="startDate" 
        placeholder="시작일" 
        onChange={(event) => {setDate(event.target.value)}}
      />
      <input 
        type="text" 
        className="startHour" 
        placeholder="시작시간(0~23)" 
        onChange={(event) => {setStartHour(event.target.value)}} 
      />
      <input 
        type="text" 
        className="endHour" 
        placeholder="종료시간(0~23)" 
        onChange={(event) => {setEndHour(event.target.value)}} 
      />
      <input 
        type="text" 
        className="description" 
        placeholder="설명" 
        onChange={(event) => {setDescription(event.target.value)}} 
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
