import React from "react";
import PropTypes from "prop-types";

import styles from "./Event.module.css";

function Event({ onClickInputButton, handleChangeInput }) {
  return (
    <div className={styles.dateBoxs}>
      <div>
        <p>이벤트 날짜</p>
        <input type="date" name="date" onChange={handleChangeInput} />
        <p>시작 시간 (0부터 24까지 입력해주세요)</p>
        <input
          type="text"
          name="startTime"
          onChange={handleChangeInput}
        />
        <p>종료 시간 (0부터 24까지 입력해주세요)</p>
        <input
          type="text"
          name="endTime"
          onChange={handleChangeInput}
        />
        <p>이벤트 제목</p>
        <input type="text" name="title" onChange={handleChangeInput} />
      </div>
      <p>이벤트 내용 작성</p>
      <input
        className={styles.textBox}
        type="text"
        name="description"
        onChange={handleChangeInput}
      />
      <input
        onClick={onClickInputButton}
        className={styles.button}
        type="submit"
        value="제출"
      />
    </div>
  );
}

Event.propTypes = {
  onClickInputButton: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired
};

export default Event;
