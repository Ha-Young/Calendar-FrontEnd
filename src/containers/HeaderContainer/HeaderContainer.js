import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UnitSelectorContainer from "../UnitSelectorContainer/UnitSelectorContainer";
import NavigationButton from "../../components/Button/NavigationButton";
import DateDisplay from "../../components/DateDisplay/DateDisplay";
import EventCreationButton from "../../components/Button/EventCreationButton";
import { INCREASE_DATE, DECREASE_DATE } from "../../constants/actionTypes";
import { increaseDate, decreaseDate, updateEvent } from "../../actions/index";
import { receiveEventData } from "../../utils/api";
import styles from "./HeaderContainer.module.scss";

function HeaderContainer({
  dateUnit,
  currentDate,
  onDateChange,
  onEventChange,
}) {
  useEffect(() => {
    (async () => {
      try {
        await receiveEventData(onEventChange);
      } catch (error) {
        console.warn(error);
      }
    })();
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

HeaderContainer.propTypes = {
  dateUnit: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onEventChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
