import React, { useEffect } from "react";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import HeaderContainer from "../../containers/HeaderContainer";
import AppRouter from "../AppRouter/AppRouter";

const App = () => {
  return (
    <div className={styles.App}>
      <HeaderContainer />
      <AppRouter />
    </div>
  );
};

export default App;
