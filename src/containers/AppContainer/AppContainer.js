import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./AppContainer.module.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import { saveSampleData } from "../../utils/api";
import Calendar from "../../components/Calendar/Calendar";
import * as dayjs from "dayjs";
import { connect } from "react-redux";
import { changeViewMode } from "../../actions";
import Form from "../../components/Form/Form";

// Feel free to modify as you need.
function AppContainer({ onViewChange, isViewModeDaily }) {
  return (
    <div className={styles.AppContainer}>
      <AppHeader
        onViewChange={onViewChange}
      />
      <Switch>
        <Route path="/" exact>
          <Calendar
            viewMode={isViewModeDaily}
          />
        </Route>
        <Route path="/events/new">
          <Form submitHandler="" value="일정 더하기">
            <input type="text" name="title" />
            <input type="text" name="description" />
            <input type="date" name="date" />
            <input type="time" name="start" />
            <input type="time" name="finish" />
          </Form>
        </Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onViewChange() {
      dispatch(changeViewMode());
    },
  };
};

const mapStateToProps = state => {
  return {
    isViewModeDaily: state.isViewModeDaily,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
