import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, DatePicker } from "antd";
import moment from "moment";
import React from "react";

import { DATE_FORMAT } from "../../constants/common";
import { getCalcDay } from "../../utils/date";
import styles from "./DatePicker.module.css";

function AppDatePicker({ currentDate, onChangeDate }) {
  function changeDate(newDate) {
    onChangeDate(newDate);
  }

  function onClickDayMoveBtn(isPrev) {
    if (isPrev) {
      changeDate(getCalcDay(currentDate, -1));
      return;
    }

    changeDate(getCalcDay(currentDate, +1));
  }

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.moveBtn}
        shape="circle"
        icon={<LeftOutlined />}
        type="text"
        onClick={() => onClickDayMoveBtn(true)}
      />
      <h1 className={styles.currentDateText}>{currentDate}</h1>
      <Button
        className={styles.moveBtn}
        shape="circle"
        icon={<RightOutlined />}
        type="text"
        onClick={() => onClickDayMoveBtn(false)}
      />
      <DatePicker
        value={moment(currentDate, DATE_FORMAT)}
        format={DATE_FORMAT}
        allowClear={false}
        className={styles.datePicker}
        onChange={moment => changeDate(moment.format(DATE_FORMAT))}
      />
    </div>
  );
}

export default AppDatePicker;
