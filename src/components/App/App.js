import React from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import Timeline from '../Timeline/Timeline';
import AddEventPage from '../AddEventPage/AddEventPage';
import { connect } from 'react-redux';

function App( {updateDateReducer} ) {

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Timeline showDailyPage={updateDateReducer.shouldLoadDailyPage} />
        </Route>
        <Route path='/week'>
          <Timeline showDailyPage={updateDateReducer.shouldLoadDailyPage} />
        </Route>
        <Route path='/event/new'>
          <AddEventPage />
        </Route>
        <Route path='/event/:eventId'>
          <div>Event Detail</div>
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    updateDateReducer: state.updateDateReducer
  };
};

export default connect(mapStateToProps)(App);
