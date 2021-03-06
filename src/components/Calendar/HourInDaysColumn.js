import React from "react";
import Event from "./Event";
import styles from "./Calendar.module.css";

export default function HourInDaysColumn({
  day,
  isDayCalendarShown,
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
      <h3 className={`${styles.dayFont}`}>{!isDayCalendarShown && day}</h3>

      <div className={`${styles.hoursIndayWrapper}`} events={events}>
        {hours.map((hour, index) => {
          return (
            <div
              className={`${styles.hourWrapper}`}
              key={index}
              date={day}
              hour={hour}
            >
              {events.map((e) => {
                if (hour === e.startHour && day === e.date) {
                  return (
                    <Event
                      title={e.title}
                      id={e.id}
                      startHour={e.startHour}
                      endHour={e.endHour}
                      description={e.description}
                      color={e.color}
                      height={e.endHour - e.startHour}
                      key={index}
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
