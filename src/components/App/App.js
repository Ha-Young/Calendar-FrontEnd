import React, { useEffect } from "react";
import { saveSampleData } from "../../utils/api";
import styles from "./App.module.css";
import AuthContainer from "../../containers/AuthContainer";

function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <AuthContainer />
    </div>
  );
}

export default App;
