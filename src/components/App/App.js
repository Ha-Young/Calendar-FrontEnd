import React, { useEffect } from "react";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import AppRouter from "../AppRouter/AppRouter";

const App = ({ onInitialLoad, changeCalendarType, something }) => {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <AppRouter changeCalendarType={changeCalendarType} />
    </div>
  );
};

export default App;
