import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Event from "../../containers/Event";
import { getRecord } from "../../api";

function App({ onInitialLoad }) {
  useEffect(() => {
    (async function(){
      const data = await getRecord();
      onInitialLoad(data);
    })();
  }, []);

  return (
   <Fragment>
     <Header />
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
   </Fragment>
  );
}

export default App;
