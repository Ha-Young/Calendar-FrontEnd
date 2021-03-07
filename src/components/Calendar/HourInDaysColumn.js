import React from "react";
import Event from "./Event";
import styles from "./Calendar.module.css";

export default function HourInDaysColumn({
  day,
  calendarMode,
  events,
  onDeleteEvent,
  onClickGetEventInfo,
  showModal,
}) {
  const hours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  return (
    <div className={`${styles.dayWrapper}`}>
      <h3 className={`${styles.dayFont}`}>{calendarMode === "week" && day}</h3>

      <div className={`${styles.hoursIndayWrapper}`} events={events}>
        {hours.map((hour) => {
          return (
            <div
              className={`${styles.hourWrapper}`}
              key={hour}
              date={day}
              hour={hour}
            >
              {events.map((e) => {
                const {
                  title,
                  id,
                  startHour,
                  endHour,
                  description,
                  color,
                  date,
                } = e;

                if (hour === startHour && day === date) {
                  return (
                    <Event
                      title={title}
                      id={id}
                      startHour={startHour}
                      endHour={endHour}
                      description={description}
                      color={color}
                      height={endHour - startHour}
                      key={hour}
                      onDeleteEvent={onDeleteEvent}
                      onClickGetEventInfo={onClickGetEventInfo}
                      onEventClick={showModal}
                    />
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
