import React, { useEffect, useState } from "react";
import styles from "./Daily.module.css";

import buildDaily from "./buildDaily";
import Header from "./DailyHeader";
import TimeSidebar from "../SidebarTime";

import moment from "moment";
import { Link } from "react-router-dom";

export default function Daily() {
  const [day, setDay] = useState("");
  const [dayValue, setDayValue] = useState(moment());

  const dateID = dayValue.format("YYMMDD");
  const result = [];

  function handleClickDateBox(e) {
    if (e.target.getAttribute("data-event")) {
      // 이벤트가 있으므로 이벤트 상세 페이지
    } else {
      console.log(e.target.getAttribute("data-id"));
      // 이벤트가 없으므로 반응 없음
      // <Link to="/event/new" />
    }
  }

  for (let i = 0; i < 24; i++) {
    result.push(i);
  }

  useEffect(() => {
    setDay(buildDaily(dayValue));
  }, [dayValue]);

  return (
    <div className={styles.calendar}>
      <Header value={dayValue} setValue={setDayValue} />
      <section className={styles.content}>
        <TimeSidebar />
        <div className={styles["flex-item"]}>
          <div className={styles.today}>
            {day ? day.format("D").toString() : null}
          </div>
          {result.map((value) => (
            <div
              onClick={(e) => handleClickDateBox(e)}
              data-event={false} // 인자로 이벤트 유무를 체크
              data-id={`${dateID}_${value}`}
              key={value}
              className={styles["day-box"]}
            >
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
