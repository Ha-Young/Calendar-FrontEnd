import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setData } from '../actions';
import { MODE_WEEK } from '../constants/ActionType';
import App from '../components/App';
import EventDetails from '../components/EventDetails/EventDetails';

const mapStateToProps = state => {
  return {
    mode: state.calendarModeReducer.mode,
    dateState: state.currentDateReducer.dateState,
    needToFecthing: state.currentDateReducer.needToFecthing,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: data => dispatch(setData(data, MODE_WEEK)),
  };
};
const AppContainer = ({ dateState, mode, needToFecthing, fetchData }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/calendar"/>
        </Route>
        <Route path="/calendar">
          <App dateState={dateState} fetchData={fetchData} needToFecthing={needToFecthing}/>
        </Route>
        <Route
          path="/events/:eventId"
          render={({ location }) => <EventDetails location={location} dateState={dateState} mode={mode}/>}
        >
        </Route>
      </Switch>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
