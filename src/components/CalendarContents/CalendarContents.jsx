import React from "react";
import { useHistory } from "react-router-dom";
import { DateTime } from "luxon";
import styles from "./CalendarContents.module.css";

export default function CalendarContents({ localDates, events, selectEvent }) {
  const history = useHistory();

  // TODO remove e if you don't use
  const handleEventClick = (e, id, dayIndex) => {
    selectEvent(id, dayIndex);
    history.push(`/events/${id}`);
  }


// TODO map안쪽 for loop 따로 뺄 수 있을듯? 
  const days = localDates.map((date, index) => {
    const event = events[index];
    const items = [];

    for (let hour = 0; hour < 24; hour++) {
      // TODO 아니면 그냥 for 문 말고 events 먼저 순회하고 [] 안에 날짜별 [] 만들고, 해당 시간대에 타이틀 있는지/색칠 해야하는지 표시해서 넘겨주고 render할때 이거 참고해서 그리기만 하면 훨 빠를듯. 이러면 시간복잡도 그냥 event 개수임.
      // TODO 그냥 for문으로 바꿔서 break 가능하게 바꾸는것도 좋을듯. 지금은 24 * event 개수가 시간복잡도라 너무 느림. 멸망...
      let isEvent = false;
      for (let eventKey in event) {
        if (event.hasOwnProperty(eventKey) && (hour >= DateTime.fromISO(event[eventKey].startDateTime).hour && hour <= DateTime.fromISO(event[eventKey].endDateTime).hour)) {
          isEvent = true;
          // REVIEW id가 어떻게 제대로 들어가지?? 이거 느낌이 전부 클로저 박아둔 삘인디,, 그냥 data-attribute 에 넣어두고 e.target으로 잡는것도 괜찮을듯??
          if (DateTime.fromISO(event[eventKey].startDateTime).hour === hour) {
            items.push(<div key={hour}className={styles.fillItem} onClick={(e) => handleEventClick(e, event[eventKey].uid, index)}>{event[eventKey].title}</div>);
          } else {
            items.push(<div key={hour} className={styles.fillItem} onClick={(e) => handleEventClick(e, event[eventKey].uid, index)} />);
          }
        }
      }

      if (!isEvent) {
        items.push(
          <div
            key={hour}
            className={styles.calendarItem}
          />
        );
      }
    }

    return (
      <div key={index} className={styles.dayWrapper}>
        {items}
      </div>
    );
  });

  return days;
}
