import React from "react";

import styles from "./Sidebar.module.css";
import SidebarInfoBoard from "components/Sidebar/SidebarInfoBoard";
import SidebarUpcomingEventBoard from "components/Sidebar/SidebarUpcomingEventBoard";

export default function Sidebar({ currentTime, events }) {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.today}`}>
        <SidebarInfoBoard currentTime={currentTime} />
      </div>
      <div className={`${styles.events}`}>
        <SidebarUpcomingEventBoard events={events} />
      </div>
    </div>
  );
}
