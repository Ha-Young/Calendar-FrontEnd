import React from "react";
import { NavLink } from "react-router-dom";
import DayBox from "./DayBox";
import styles from "./DayBox.module.css";

export default function DayBoxes({ days, hasLink, onLinkClick }) {
  if (!days || !days.length) {
    return null;
  }
  
  return days.map((val, i) => {
    if (hasLink) {
      return (
        <NavLink 
          key={i}
          to={`/calendar/day/${val.formatString}`}
          activeClassName={styles.active}
          onClick={onLinkClick}
        >
          <DayBox 
            title={val.date} 
            description={val.dayOfWeek}
            hasActiveToggle={hasLink}
          />
        </NavLink>
      );
    } else {
      return (
        <DayBox 
          key={i}
          title={val.date} 
          description={val.dayOfWeek}
          hasActiveToggle={hasLink}
        />
      );
    }
  });
}
