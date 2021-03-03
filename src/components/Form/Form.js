import React, {useEffect, useState} from "react";
import { saveNewRecord } from "../../api";
import "./style.css";

function Form ({ onEventSubmit }) {
  const [content, setContent] = useState({title: "", description: "", startDate: "", startHour: "", endHour: ""});
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const prop = event.target.className;
    const value = event.target.value;

    setContent(() => {
      const newContent = {...content};
      newContent[prop] = value;
      return newContent;
    });
  }

  useEffect(() => {
    onEventSubmit(content);
  }, [submitting]);

  return (
    <form className="input-container" onSubmit={(e) => { 
      e.stopPropagation();
      setSubmitting(!submitting);
     }}>
      <div>새로운 이벤트</div>
      <input type="text" className="title" placeholder="제목" onChange={handleChange}/>
      <input type="date" className="startDate" placeholder="시작일(YYYY-MM-DD)" onChange={handleChange}/>
      <input type="text" className="startHour" placeholder="시작시간(0~23)" onChange={handleChange}/>
      <input type="text" className="endHour" placeholder="종료시간(0~23)" onChange={handleChange}/>
      <input type="text" className="description" placeholder="설명" onChange={handleChange}/>
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
