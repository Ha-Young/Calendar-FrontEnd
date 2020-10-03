import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../utils/api";
import {
  userLogIn,
  userLogOut,
  clickPrevDateButton,
  clickNextDateButton,
  changeViewType,
  getStoredEventsData,
} from "../actions/actionCreators";
import App from "../components/App/App";
import PropTypes from "prop-types";

function AppContainer (props) {
  const {
    userLogIn,
    userLogOut,
    isLoggedIn,
    selectedDate,
    viewType,
    changeViewType,
    clickPrevDateButton,
    clickNextDateButton,
    getStoredEventsData,
    eventList,
  } = props;

  const getStoredData = async () => {
    const storedEventsData = await getData();
    getStoredEventsData(storedEventsData);
  };

  useEffect(() => {
    getStoredData();
  }, []);

  return (
    <App
      userLogIn={userLogIn}
      userLogOut={userLogOut}
      isLoggedIn={isLoggedIn}
      selectedDate={selectedDate}
      viewType={viewType}
      changeViewType={changeViewType}
      clickPrevDateButton={clickPrevDateButton}
      clickNextDateButton={clickNextDateButton}
      eventList={eventList}
    />
  );
}

const mapStateToProps = (state) => {
  const {
    eventControl: {
      selectedDate,
      isLoggedIn,
      viewType,
    },
    eventList,
  } = state;

  return {
    selectedDate: selectedDate,
    isLoggedIn: isLoggedIn,
    viewType: viewType,
    eventList: eventList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogIn: () => dispatch(userLogIn()),
    userLogOut: () => dispatch(userLogOut()),
    clickPrevDateButton: (days) => dispatch(clickPrevDateButton(days)),
    clickNextDateButton: (days) => dispatch(clickNextDateButton(days)),
    changeViewType: (viewType) => dispatch(changeViewType(viewType)),
    getStoredEventsData: (data) => dispatch(getStoredEventsData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (AppContainer);

AppContainer.propTypes = {
  userLogIn: PropTypes.func.isRequired,
  userLogOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  selectedDate: PropTypes.string.isRequired,
  viewType: PropTypes.string.isRequired,
  changeViewType: PropTypes.func.isRequired,
  clickPrevDateButton: PropTypes.func.isRequired,
  clickNextDateButton: PropTypes.func.isRequired,
  getStoredEventsData: PropTypes.func.isRequired,
  eventList: PropTypes.array.isRequired,
};
