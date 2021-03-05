import "antd/dist/antd.css";

import { Layout } from "antd";
import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import { auth } from "../../api/firebase";
import { VIEW_OPTION } from "../../constants/stateTypes";
import EventsContainer from "../../containers/EventsContainer";
import ScheduleContainer from "../../containers/ScheduleContainer";
import { getDiffDay, getWeekDateListBasedOnDate } from "../../utils/date";
import AppHeader from "../AppHeader";
import AppSider from "../AppSider";
import ErrorView from "../ErrorView";
import Loading from "../Loading";
import Login from "../Login";
import styles from "./App.module.css";

const { Header, Footer, Content, Sider } = Layout;

function App({
  viewOption,
  currentDate,
  date,
  user,
  loading,
  error,
  changeViewOption,
  changeCurrentDate,
  getDate,
  getDateListOnRange,
  stopErrorView,
  loginUser,
}) {
  const history = useHistory();

  useEffect(() => {
    if (user) {
      getDate({ userId: user.id, currentDate });
    }

    return () => {
      auth.signOut();
    };
  }, [user]);

  function updateViewOption(newViewOption) {
    changeViewOption({ currentDate, viewOption: newViewOption });

    if (newViewOption === VIEW_OPTION.WEEKLY) {
      getWeeklyDateList();
    }
  }

  function updateCurrentDate(newCurrentDate) {
    changeCurrentDate({ viewOption, currentDate: newCurrentDate });
    const diffDay = getDiffDay(currentDate, newCurrentDate);

    if ( diffDay > 1 && viewOption === VIEW_OPTION.WEEKLY) {
      getWeeklyDateList();
      return;
    }

    if (!date.byId[newCurrentDate]) {
      getDate({
        userId: user.id,
        currentDate: newCurrentDate,
      });
    }
  }

  function getWeeklyDateList() {
    const weeklyDateList = getWeekDateListBasedOnDate(currentDate);
    const startDate = weeklyDateList[0].date;
    const endDate = weeklyDateList[weeklyDateList.length - 1].date;

    getDateListOnRange({
      userId: user.id,
      startDate,
      endDate,
    });
  }

  function handleErrorViewTimeEnd() {
    stopErrorView();
    history.push('/calendar');
  }

  function handleLoginComplete(user) {
    loginUser(user);
  }

  return (
    <Layout className={styles.App}>
      {!!user || <Login onLoginComplete={handleLoginComplete}/>}
      {(loading && !error) && <Loading />}
      {error && <ErrorView onErrorViewTimeEnd={handleErrorViewTimeEnd} errMsg={error} viewSecond={3} />}
      <Header className={styles.header}>
        <AppHeader currentDate={currentDate} updateDate={updateCurrentDate} />
      </Header>
      <Layout className={styles.main}>
        <Sider className={styles.sidebar} width="300">
          <AppSider
            viewOption={viewOption}
            onChangeViewOption={updateViewOption}
          />
        </Sider>
        <Content className={styles.content}>
          <Switch>
            <Route path="/calendar">
              <ScheduleContainer />
            </Route>
            <Route path="/events">
              <EventsContainer />
            </Route>
            <Redirect from="/" exact to="/calendar" />
          </Switch>
        </Content>
      </Layout>
      <Footer className={styles.footer}>
        Copyright @hychoi-vannillacoding
      </Footer>
    </Layout>
  );
}

export default App;
