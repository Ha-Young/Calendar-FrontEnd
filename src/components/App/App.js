import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import GlobalStyles from "./GlobalStyles";
import AppHeader from "../Header/AppHeader";
import Month from "../Monthly/Monthly";
import Weekly from "../Weekly/Weekly";
import Daily from "../Daily/Daily";
import dayCalculator from "../../utils/dayCalculater";

const Wrapper = styled.div`
  padding: 1em;
`;

const App = ({ onInitialLoad }) => {
  useEffect(() => {
    onInitialLoad();
    dayCalculator();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      <AppHeader />

      <Switch>
        <Route path="/" exact>
          <Daily />
        </Route>
        <Route path="/weekly">
          <Weekly />
        </Route>
        <Route path="/daily">
          <Daily />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
