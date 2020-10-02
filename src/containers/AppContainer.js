import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setData } from '../actions';
import App from '../components/App';

const mapStateToProps = state => {
  return {
    dateState: state.currentDateReducer.dateState,
    needToFecthing: state.currentDateReducer.needToFecthing,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: data => dispatch(setData(data)),
  };
};
const AppContainer = ({ dateState, needToFecthing, fetchData }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/calendar"/>
      </Route>
      <Route path="/calendar">
        <App dateState={dateState} fetchData={fetchData} needToFecthing={needToFecthing}/>
      </Route>
    </Switch>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
