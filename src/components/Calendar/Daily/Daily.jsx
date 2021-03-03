import React, { useEffect, useState } from "react";
import styles from "./Daily.module.css";

import buildDaily from "./buildDaily";
import Header from "../header";
import TimeSidebar from "../SidebarTime";
import Calendar from "../Calendar";

import moment from "moment";

export default function Daily({ history }) {
  const [day, setDay] = useState("");
  const [dayValue, setDayValue] = useState(moment());

  const newDate = day ? day.format("D").toString() : null;
  const dateID = dayValue.format("YYYYMMMMDD");

  function handleClickDateBox(e) {
    if (e.target.hasAttribute("data-event")) {
      const eventQuery = e.target.getAttribute("data-id");

      history.push(`/event/${eventQuery}`);
    } else {
      console.log(e.target.getAttribute("data-id"));
      history.push("/event/new");
    }
  }

  useEffect(() => {
    setDay(buildDaily(dayValue));
  }, [dayValue]);

  return (
    <div className={styles.calendar}>
      <Header
        value={dayValue}
        setValue={setDayValue}
        TypeOfTime="day"
      />
      <section className={styles.content}>
        <TimeSidebar />
        <div className={styles["flex-item"]}>
          <Calendar
            day={newDate}
            dayID={dateID}
            onClickDate={handleClickDateBox}
            />
        </div>
      </section>
    </div>
  );
}
