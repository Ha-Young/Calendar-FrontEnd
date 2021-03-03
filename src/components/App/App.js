import React, { useEffect, useState } from "react";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";

import { onAuthStateChanged } from "../../api/index";
import Main from "../Main/Main";
import { Route } from "react-router-dom";
import Auth from "../Auth/Auth";

const App = function ({
  isWeeklySchedule,
  date,
  onInitialLoad
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
    <>
      {isInitialized && (
        <div className={styles.App}>
          {isLoggedIn
            ? (
              <>
                <Header />
                <Main
                  isWeeklySchedule={isWeeklySchedule}
                  date={date}
                  isLoggedIn={isLoggedIn}
                />
              </>
            )
            : (
              <Route exact path="/" >
                <Auth />
              </Route>
            )
          }
        </div>
      )}
    </>
  );
};

export default App;
