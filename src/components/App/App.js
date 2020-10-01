import React, { useEffect } from "react";
import styles from "./App.module.css";
import { saveSampleData } from "../../utils/api";
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
