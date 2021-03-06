import React from "react";

import styles from "./Sidebar.module.css";
import SidebarInfoBoard from "components/Sidebar/SidebarInfoBoard";
import SidebarUpcomingEventBoard from "components/Sidebar/SidebarUpcomingEventBoard";

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.today}`}>
        <SidebarInfoBoard />
      </div>
      <div className={`${styles.events}`}>
        <SidebarUpcomingEventBoard />
      </div>
    </div>
  );
}
