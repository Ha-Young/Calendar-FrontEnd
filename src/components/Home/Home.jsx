import React from "react";
import { CURRENT_YYMMDD } from "utils/utilData";
// import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <>
      <button>
        <span role="img" aria-label="arrow">
          ◀️
        </span>
      </button>
      <span>{CURRENT_YYMMDD.year + ". " + CURRENT_YYMMDD.month + "월"}</span>
      <button>
        <span role="img" aria-label="arrow">
          ▶️
        </span>
      </button>
    </>
  );
};

export default Home;
