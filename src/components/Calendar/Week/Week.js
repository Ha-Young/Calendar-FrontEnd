import React from "react";
import Day from "../Day/Day";

export default function Week() {
  const DAYS = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  return (
    <>
      {
        DAYS.map(day => {
          return <Day key={day} />
        })
      }
    </>
  );
}
