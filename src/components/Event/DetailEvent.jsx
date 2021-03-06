import React from "react";
import PropTypes from "prop-types";

import styles from "./Event.module.css";

function DetailEvent(props) {
  const {
    eventDate,
    startTime,
    endTime,
    title,
    description,
    handleChangeInput,
    handleReviseButton,
    handleClickRemoveButton
  } = props;

  return (
    <div>
      <div className={styles.dateBoxs}>
        <p>이벤트 날짜</p>
        <input
          value={eventDate}
          type="date"
          name="date"
          onChange={handleChangeInput}
        />
        <p>시작 시간</p>
        <input
          value={startTime}
          type="text"
          name="startTime"
          onChange={handleChangeInput}
        />
        <p>종료 시간</p>
        <input
          value={endTime}
          type="text"
          name="endTime"
          onChange={handleChangeInput}
        />
        <p>이벤트 제목</p>
        <input
          value={title}
          type="text"
          name="title"
          onChange={handleChangeInput}
        />
        <p>이벤트 내용 작성</p>
        <input
          value={description}
          className={styles.textBox}
          type="text"
          name="description"
          onChange={handleChangeInput}
        />
        <div className={styles.submitButton}>
          <input
            onClick={handleReviseButton}
            className={styles.button}
            type="submit"
            value="이벤트 수정"
          />
          <input
            onClick={handleClickRemoveButton}
            className={styles.button}
            type="submit"
            value="이벤트 삭제"
          />
        </div>
      </div>
    </div>
  );
}

DetailEvent.propTypes = {
  eventDate: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleReviseButton: PropTypes.func.isRequired,
  handleClickRemoveButton: PropTypes.func.isRequired,
};

export default DetailEvent;
