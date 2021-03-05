import React, { useEffect } from "react";
import styles from "./CalendarBody.module.css";
import { getEvents } from "../../api";
import { calculateWeek } from "../../utils";
import CalendarTimeLine from "../CalendarTimeLine/CalendarTimeLine";
import CalendarContents from "../CalendarContents/CalendarContents";

export default function CalendarBody({ selectedDate, events, isDailyView, loadEvents, selectEvent }) {
  const toDisplayDates = calculateWeek(selectedDate, isDailyView);

  useEffect(() => {
    const readData = async () => {
      const events = await getEvents(toDisplayDates.map(date => date.toFormat("yyyy-LL-dd")));
      loadEvents(events);
    }

    readData();
  }, [selectedDate, isDailyView]);

  return (
    <div className={styles.wrapper}>
      <CalendarTimeLine />
      <CalendarContents toDisplayDates={toDisplayDates} events={events} selectEvent={selectEvent} />
    </div>
  );
}
