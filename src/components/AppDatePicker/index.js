import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, DatePicker } from "antd";
import moment from "moment";
import React, { useState } from "react";

import { DATE_FORMAT } from "../../constants/common";
import { getCalcDay } from "../../utils/date";
import styles from "./DatePicker.module.css";

function AppDatePicker({ currentDate, onChangeDate }) {
  const [date, setDate] = useState(currentDate);

  function changeDate(newDate) {
    setDate(newDate);
    onChangeDate(newDate);
  }

  function onClickDayMoveBtn(isPrev) {
    if (isPrev) {
      changeDate(getCalcDay(date, -1));
      return;
    }

    changeDate(getCalcDay(date, +1));
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
      <h1 className={styles.currentDateText}>{date}</h1>
      <Button
        className={styles.moveBtn}
        shape="circle"
        icon={<RightOutlined />}
        type="text"
        onClick={() => onClickDayMoveBtn(false)}
      />
      <DatePicker
        value={moment(date, DATE_FORMAT)}
        format={DATE_FORMAT}
        allowClear={false}
        className={styles.datePicker}
        onChange={moment => changeDate(moment.format(DATE_FORMAT))}
      />
    </div>
  );
}

export default AppDatePicker;
