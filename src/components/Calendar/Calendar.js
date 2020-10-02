import React from "react";
import styles from "./Calendar.module.css";
import Day from "./Day/Day";
import Week from "./Week/Week";
import TimeBar from "./TimeBar/TimeBar";
import * as dayjs from "dayjs";
import { VIEWMODE_DAILY, VIEWMODE_WEEKLY } from "../../constants";

export default function Calendar({
  viewMode,
  date,
}) {
  const dayOfWeek = dayjs(date).day();
  const mockData = {
    "2020": {
      "09": {
        "03": {
          "-MIeKmgtk7cUWzjXRLpv": {
            "description": "한 자릿수 달",
            "finishTime": "19",
            "startTime": "01",
            "title": "9월"
          }
        }
      },
      "10": {
        "02": {
          "-MIbiXeN1CzWbl2YQZBq": {
            "description": "fda",
            "finishTime": "10",
            "startTime": "02",
            "title": "asdgasd"
          },
          "-MIbjmYwMRwO-_VstH41": {
            "description": "fdsa",
            "finishTime": "15",
            "startTime": "11",
            "title": "redirect"
          },
        },
        "03": {
          "-MIbwWeyHPO-pDMCL_i1": {
            "description": "asdd",
            "finishTime": "06",
            "startTime": "03",
            "title": "sdfhad"
          }
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <TimeBar />
      {
        viewMode === VIEWMODE_DAILY
        && <Day
          date={date}
          dayOfWeek={dayOfWeek}
          eventData={mockData}
        />
      }
      {
        viewMode === VIEWMODE_WEEKLY
        && <Week
          date={date}
          dayOfWeek={dayOfWeek}
          eventData={mockData}
        />
      }
    </div>
  );
}
