import React from "react";
import { connect } from "react-redux";
import "./style.css";

const Form = ({ onSubmit, onChange }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="input-container" onSubmit={onSubmit}>
      <div>새로운 이벤트</div>
      <input type="text" className="title" placeholder="제목" onChange={onChange} />
      <input type="text" className="description" placeholder="설명" onChange={onChange} />
      <input type="text" className="start" placeholder="시작" onChange={onChange} />
      <input type="text" className="finish" placeholder="종료" onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(event) {
      event.preventDefault();
      dispatch({
        type: "SAVE_RECORD",
      })
    },
    onChange(event) {
      dispatch({
        type: "CHANGE_VALUE",
        value: event.target.value,
        changeTarget: event.target.className,
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(Form);
