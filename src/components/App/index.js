import 'antd/dist/antd.css';

import { Layout } from "antd";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ScheduleContainer from '../../containers/ScheduleContainer';
import AppHeader from "../AppHeader";
import AppSider from '../AppSider';
import Events from "../Events";
import styles from "./App.module.css";

const { Header, Footer, Content, Sider } = Layout;

function App(
  {
    viewOption,
    currentDate,
    date,
    events,
    user,
    changeViewOption,
    changeCurrentDate,
    moveAddEventPage,
    createEvent,
    onInitLoad,
  }) {
  useEffect(() => {
    console.log('init', user);
    onInitLoad({ userId: user.id, currentDate });
  }, []);

  function updateViewOption(newViewOption) {
    changeViewOption({ currentDate, viewOption: newViewOption });
  }

  function updateCurrentDate(newCurrentDate) {
    changeCurrentDate({ viewOption, currentDate: newCurrentDate });
  }

  return (
    <Layout className={styles.App}>
      <Header className={styles.header}>
        <AppHeader currentDate={currentDate} updateDate={updateCurrentDate}/>
      </Header>
      <Layout className={styles.main}>
        <Sider className={styles.sidebar} width="300">
          <AppSider viewOption={viewOption} updateViewOption={updateViewOption}/>
        </Sider>
        <Content className={styles.content}>
          <Switch>
            <Route path="/calendar">
              <ScheduleContainer />
            </Route>
            <Route path="/events">
              <Events user={user} createEvent={createEvent}/>
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
