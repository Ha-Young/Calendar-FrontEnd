import 'antd/dist/antd.css';

import { Layout } from "antd";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AppHeader from "../AppHeader";
import AppSider from '../AppSider';
import Events from "../Events";
import Schedule from "../Schedule";
import styles from "./App.module.css";

const { Header, Footer, Content, Sider } = Layout;

function App({ onInitialLoad, viewOption, changeViewOption, currentDate, changeCurrentDate, moveAddEventPage }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <Layout className={styles.App}>
      <Header className={styles.header}>
        <AppHeader currentDate={currentDate} updateDate={changeCurrentDate}/>
      </Header>
      <Layout className={styles.main}>
        <Sider className={styles.sidebar} width="300">
          <AppSider viewOption={viewOption} updateViewOption={changeViewOption}/>
        </Sider>
        <Content className={styles.content}>
          <Switch>
            <Route path="/calendar">
              <Schedule
                viewOption={viewOption}
                currentDate={currentDate}
                onScheduleAddBtnClick={moveAddEventPage}
              />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Redirect from="/" exact to="/calendar" />
          </Switch>
        </Content>
      </Layout>
      <Footer className={styles.footer}>Copyright @hychoi-vannillacoding</Footer>
    </Layout>
  );
}

export default App;
