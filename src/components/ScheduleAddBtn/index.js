import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

import styles from "./ScheduleAddBtn.module.css";

function ScheduleAddBtn({ onClick }) {
  return (
    <div className={styles.scheduleAddBtnWrapper}>
      <Button
        className={styles.scheduleAddBtn}
        icon={<PlusOutlined />}
        onClick={onClick}
      />
    </div>
  );
}

export default ScheduleAddBtn;
