import React, { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import styles from "./Calendar.module.css";
import DayBox from "./DayBox";
import Column from "./TimeTableColumn";

export default function Calender({ weekData, today }) {
  const history = useHistory();
  const param = useParams();
  const [isWeek, setIsWeek] = useState(param.dateUnit === "week");

  // const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  // const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const fakeWeekData = [
    {
      date: 8,
      dayOfWeek: "Monday"
    },
    {
      date: 9,
      dayOfWeek: "Tuesday"
    },
    {
      date: 10,
      dayOfWeek: "Wednesday"
    },
    {
      date: 11,
      dayOfWeek: "Thursday"
    },
    {
      date: 12,
      dayOfWeek: "Friday"
    },
    {
      date: 13,
      dayOfWeek: "Saturday"
    },
    {
      date: 14,
      dayOfWeek: "Sunday"
    },
  ];
  // 이거 나중에 고쳐라ㅏㅏㅏㅏㅏ


  const time = [];
  for (let i = 0; i <= 24; i++) {
    if (i <= 12) {
      time.push(`${i} AM`);
    } else {
      time.push(`${i - 12} PM`)
    }
  }

  const handleDateUnitChange = (e) => {
    const dateUnit = e.currentTarget.value;
    if (dateUnit === "") {
      return;
    }

    setIsWeek(dateUnit === "week");
    history.push(`/calendar/${dateUnit}`);
  }

  return (
    <div className={styles.Calendar}>
      <div className={styles.ControlBox}>
      <select 
        name="DateUnit"
        onChange={handleDateUnitChange}
        
      >
        <option value="">DateUnit</option>
        <option value="week">Week</option>
        <option value="day">Day</option>
      </select>

        {isWeek
          ?
          <div className={styles.WeekButtonBox}>
            <button className={styles.PrevWeek}>Prev Week</button>
            <button className={styles.NextWeek}>Next Week</button>
          </div>

          :
          <div className={styles.DayButtonBox}>
            <button className={styles.PrevDay}>Prev Day</button>
            <button className={styles.NextDay}>Next Day</button>
          </div>
        }
      </div>
      <div className={styles.DaysBox}>
        <DayBox 
          title={"Mar"}
          description={"2021"}
          hasActiveToggle={false}
        />
        {fakeWeekData.map((val, i) => {
          const dayBoxes = isWeek
            ? (<DayBox 
              key={i}
              title={val.date} 
              description={val.dayOfWeek}
              hasActiveToggle={!isWeek}
            />)
            : (<NavLink 
              key={i}
              to={`/calendar/day/${val.dayOfWeek}`}
              activeClassName={styles.active}
            >
              <DayBox 
                title={val.date} 
                description={val.dayOfWeek}
                hasActiveToggle={!isWeek}
              />
            </NavLink>);

          return (dayBoxes);
        })}
      </div>
      <div className={styles.TimeTableBox}>
        <div className={styles.TimeDisplayBox}>
          {time.map((val, i) => {
            return (
              <div 
                className={styles.TimeDisplay} 
                key={i}
              >
                <span>{val}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.TimeTable}>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </div>
  );
}