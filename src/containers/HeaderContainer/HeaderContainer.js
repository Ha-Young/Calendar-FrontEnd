import React, { useEffect } from "react";
import { connect } from "react-redux";
import { increaseDate, decreaseDate, updateEvent } from "../../actions/index";
import { INCREASE_DATE, DECREASE_DATE } from "../../constants/actionTypes";
import { receiveEventData } from "../../utils/api";
import NavigationButton from "../../components/Button/NavigationButton";
import DateDisplay from "../../components/DateDisplay/DateDisplay";
import UnitSelectorContainer from "../UnitSelectorContainer/UnitSelectorContainer";
import EventCreationButton from "../../components/Button/EventCreationButton";
import styles from "./HeaderContainer.module.scss";

function HeaderContainer({ dateUnit, currentDate, onDateChange, onEventChange }) {
  useEffect(() => {
    try {
      (async () => {
        await receiveEventData(onEventChange);
      })();
    } catch (error) {
      console.error(error);
    }
  }, [onEventChange]);

  const handleNavigationClick = (id) => {
    const degree = dateUnit === "일" ? 1 : 7;

    if (id === "left") {
      onDateChange(DECREASE_DATE, degree);
    } else if (id === "right") {
      onDateChange(INCREASE_DATE, degree);
    }
  };

  return (
    <header className={styles.Header}>
      <nav>
        <NavigationButton onClick={handleNavigationClick} />
        <div>
          <DateDisplay dateUnit={dateUnit} currentDate={currentDate} />
          <EventCreationButton />
        </div>
        <UnitSelectorContainer />
      </nav>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    dateUnit: state.dateUnit,
    currentDate: state.currentDate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDateChange(type, degree) {
      if (type === INCREASE_DATE) {
        dispatch(increaseDate(degree));
      } else if (type === DECREASE_DATE) {
        dispatch(decreaseDate(degree));
      }
    },
    onEventChange(eventInfo) {
      dispatch(updateEvent(eventInfo));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
