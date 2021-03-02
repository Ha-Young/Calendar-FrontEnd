import React, { useEffect } from "react";
import { addDays, subDays } from "date-fns";
import { setCalendarData } from "../../utils/date";
import { updateEventData } from "../../api/index";

const CalendarPage = ({ onLoad, onClickButton, calendarList, isDailyCalendar, date }) => { // toglebutton으로 바꾸기..
  useEffect(() => {
    updateEventData({
      path: "-MUo-VnwtAFl3_rwtIsK",
      title: "논다",
    })
    onLoad();
  }, []);

  const handlePrevButton = () => { // 나누는게 나은가..? usecallback 사용하기
    const newCalendarDate = setCalendarData(subDays, isDailyCalendar, date);

    onClickButton({
      ...newCalendarDate,
    });
  };

  const handleNextButton = () => {
    const newCalendarDate = setCalendarData(addDays, isDailyCalendar, date);

    onClickButton({
      ...newCalendarDate,
    });
  };

  return ( // 감싸줘야 하나..?, value이용해서 해야 하나..? usecallback 이용
    <>
      <button value="prev" onClick={handlePrevButton}>prev</button>
      <button value="next" onClick={handleNextButton}>next</button>
      {calendarList?.map((item) => {
        console.log(item);
      })}
    </>
  );
};

export default CalendarPage;
