import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import GlobalStyles from "./GlobalStyles";
import AppHeader from "../Header/AppHeader";
import Weekly from "../Weekly/Weekly";
import Daily from "../Daily/Daily";

const Wrapper = styled.div`
`;

const App = ({ onInitialLoad, count, getNextDay, getPrevDay, resetDay }) => {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      <AppHeader nextDay={getNextDay} prevDay={getPrevDay} resetDay={resetDay} />

      <Switch>
        <Route path="/" exact>
          <Daily count={count} />
        </Route>
        <Route path="/weekly">
          <Weekly />
        </Route>
        <Route path="/daily">
          <Daily count={count} />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default App;
