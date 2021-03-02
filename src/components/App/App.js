import React, { useEffect, useState } from "react";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";

import { onAuthStateChanged } from "../../api/index";
import Main from "../Main/Main";

const App = function ({
  isWeeklySchedule,
  date,
  onInitialLoad,
  updateNextWeek,
  updateLastWeek
}) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setIsInitialized(true);
    });
  }, []);

  useEffect(() => {
    onInitialLoad();
  }, [onInitialLoad]);

  return (
    <div className={styles.App}>
      <Header
        date={date}
        updateLastWeek={updateLastWeek}
        updateNextWeek={updateNextWeek}
      />
      {isInitialized
        ? (<Main
          isWeeklySchedule={isWeeklySchedule}
          date={date}
          isLoggedIn={isLoggedIn}
        />)
        : "Loading..."}
    </div>
  );
};

export default App;
