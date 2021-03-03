import React, { useEffect } from "react";
import styles from "./DailyCalendar.module.css";
import DailyCalendarHeader from "../DailyCalendarHeader/DailyCalendarHeader";
import DailyCalendarBody from "../DailyCalendarBody/DailyCalendarBody";
import { readDailyData } from "../../api";

export default function DailyCalendar({ selectedDate }) {
  useEffect(() => {
    const readData = async () => {
      const response = await readDailyData(selectedDate.toFormat("yyyy-LL-dd"));
    }

    readData();
  }, [selectedDate]);

  return (
    <div className={styles.calendarWrapper}>
      <DailyCalendarHeader selectedDate={selectedDate} />
      <DailyCalendarBody selectedDate={selectedDate} />
    </div>
  );
}
