import React from "react";
import styles from "./CalendarPage.module.css";
import PropTypes from "prop-types";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { addDays, subDays } from "date-fns";
import { setCalendarDate } from "../../utils/date";
import { ICON_SIZE } from "../../constants/ui";

const CalendarHeader = ({
  headerInfo,
  onButtonClick,
  selectedDate,
  isDailyCalendar,
  checkNeedLoad,
}) => {
  const checkNeedLoadByCalendarType = (date) => {
    isDailyCalendar ? checkNeedLoad(date.daily) : checkNeedLoad(date.weekly);
  };

  const handlePrevButton = () => {
    const newCalendarDate = setCalendarDate(subDays, isDailyCalendar, selectedDate);
    checkNeedLoadByCalendarType(newCalendarDate);

    onButtonClick({
      ...newCalendarDate,
    });
  };

  const handleNextButton = () => {
    const newCalendarDate = setCalendarDate(addDays, isDailyCalendar, selectedDate);
    checkNeedLoadByCalendarType(newCalendarDate);

    onButtonClick({
      ...newCalendarDate,
    });
  };

  return (
    <>
      <div className={styles.navigation}>
        {headerInfo?.map((info) => (
          <div key={info} className={styles.info}>{info}</div>
        ))}
      </div>
      <div className={styles.buttons}>
        <GrFormPrevious
          className={styles[`button-left`]}
          onButtonClick={handlePrevButton}
          size={`${ICON_SIZE}px`}
        />
        <GrFormNext
          className={styles[`button-right`]}
          onButtonClick={handleNextButton}
          size={`${ICON_SIZE}px`}
        />
      </div>
    </>
  );
};

export default CalendarHeader;

CalendarHeader.propTypes = {
  headerInfo: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  selectedDate: PropTypes.instanceOf(Date),
  isDailyCalendar: PropTypes.bool.isRequired,
  checkNeedLoad: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
