import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import GlobalStyles from "./GlobalStyles";
import Header from "../Header/Header";
import Month from "../Monthly/Monthly";
import Weekly from "../Weekly/Weekly";
import Daily from "../Daily/Daily";

const Wrapper = styled.div`
`;

const App = ({ onInitialLoad }) => {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      <Header />

      <Switch>
        <Route path="/" exact>
          <Month />
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
