import React, { useState, useEffect } from "react";
// import styles from "./App.module.css";
import { authService } from "api/firebaseService";
import AppRouter from "containers/AppRouter";

function App({ onInitialLoad }) {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  useEffect(() => {
    onInitialLoad();
  }, [onInitialLoad]);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Vanilla Calender</footer>
    </>
  );
}

export default App;
