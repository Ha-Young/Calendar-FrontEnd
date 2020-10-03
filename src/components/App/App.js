import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { authService } from "../../utils/firebase";
import moment from "moment";
import PropTypes from "prop-types";
import styles from "./App.module.css";

import EventContainer from "../../containers/EventContainer";
import Auth from "../Auth/Auth";
import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import NavButton from "../NavButton/NavButton";

export default function App (props) {
  const {
    userLogIn,
    userLogOut,
    isLoggedIn,
    selectedDate,
    clickPrevDateButton,
    clickNextDateButton,
    viewType,
    changeViewType,
    eventList,
  } = props;
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        userLogIn();
        setUserProfile({
          ...userProfile,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        userLogOut();
        setUserProfile({});
      }
    });
  }, [userLogIn, userLogOut]);

  const matchedEventList = eventList.filter((list) => {
    return list.eventDate === selectedDate;
  });

  const selectedWeek = [];
  for (let i = 0; i < 7; i++) {
    selectedWeek.push(moment(selectedDate).day(i));
  }

  return (
    <>
      {
        !isLoggedIn
          ? <Auth />
          : <div className={styles.App}>
              <Header
                changeViewType={changeViewType}
                userName={userProfile.displayName}
              />
              <Switch>
                <Route path="/calendar">
                  <NavButton
                    date={selectedDate}
                    viewType={viewType}
                    clickPrevButton={clickPrevDateButton}
                    clickNextButton={clickNextDateButton}
                  />
                  {
                    viewType === "daily"
                      ? <Daily
                          date={selectedDate}
                          eventList={matchedEventList}
                        />
                      : <Weekly
                          week={selectedWeek}
                          eventList={eventList}
                        />
                  }
                </Route>
                <Route path="/events">
                  <EventContainer />
                </Route>
                <Redirect to="/calendar" />
              </Switch>
            </div>
      }
    </>
  );
}

App.propTypes = {
  userLogIn: PropTypes.func.isRequired,
  userLogOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  selectedDate: PropTypes.string.isRequired,
  clickPrevDateButton: PropTypes.func.isRequired,
  clickNextDateButton: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired,
  changeViewType: PropTypes.func.isRequired,
  eventList: PropTypes.array.isRequired,
};
