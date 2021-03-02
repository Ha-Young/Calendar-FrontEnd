import 'antd/dist/antd.css';

import { Layout } from "antd";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AppHeader from "../AppHeader";
import AppSider from '../AppSider';
import Calendar from "../Calendar";
import Events from "../Events";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";

const { Header, Footer, Content, Sider } = Layout;

function App({ onInitialLoad, viewOption, changeViewOption }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <Layout className={styles.App}>
      <Header className={styles.header}>
        <AppHeader>Header</AppHeader>
      </Header>
      <Layout className={styles.main}>
        <Sider className={styles.sidebar}>
          <AppSider viewOption={viewOption} updateViewOption={changeViewOption}/>
        </Sider>
        <Content>
          <Switch>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Redirect from="/" exact to="/calendar" />
          </Switch>
        </Content>
      </Layout>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  );
}

export default App;
