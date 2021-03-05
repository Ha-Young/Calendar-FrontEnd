import React, { Fragment, useEffect } from "react";
import { HashRouter, Link, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";
import { getRecord } from "../../api";
import Main from "../Main/Main";

function App({ onInitialLoad }) {
  useEffect(() => {
    (async function(){
      const data = await getRecord();
      onInitialLoad(data);
    })();
    
  }, []);

  return (
    <div>
      <Header />
    <Main />
    </div>
    
  );
}

export default App;
