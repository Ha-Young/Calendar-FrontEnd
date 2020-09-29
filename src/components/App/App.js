import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';

import Header from '../Header/Header';
import Calendar from '../Calendar/Calendar';
import NewEventContainer from '../../containers/NewEventContainer/NewEventContainer';

import { saveSampleData } from '../../utils/api';

// Feel free to modify as you need.
function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path='/calendar' exact>
          <Calendar />
        </Route>
        <Route path='/event/new'>
          <NewEventContainer />
        </Route>
        {/* <Redirect to='/calendar' /> */}
      </Switch>
    </div>
  );
}

export default App;

/*

<Provider store={store}>
  <App>
    <Route path="/event/:eventId">
      <ModalContainer /> <-> [READ] getState() <-> RX
      <UpdateButton onClick={e} /> -> [UPDATE] dispatch() -> RX -> update() -> FB -> [listener]
      <DeleteButton onClick={e} /> -> [DELETE] dispatch() -> RX -> delete() -> FB -> [listener]
    </Route>
    <AppHeader>
      <Link to="/event/new">
        <NewEventButton />
      </Link>
      <ViewModeToggle /> **[localState]
    </AppHeader>
    <Switch>
      <Route path="/calendar">
        <Calendar>
          <PreviousButton />
          <NextButton />
          <EventContainer> <-> [READ] getState() <-> RX <-> on() <-> FB
            <CardList>
              <DailyCard>
                (<div>00:00</div> * 24)(?)
              </DailyCard>
            </CardList>
          </EventContainer>
        </Calendar>
      </Route>
      <Route path="/event/new">
        <NewEventContainer>
          <Link path="/calender">
            <BackButton />
          </Link>
          <ModalContainer ?? /> -> [WRITE] dispatch() -> RX -> write() -> FB -> [listener]
        </NewEventContainer>
      </Route>
      <Redirect to="/calendar">
    </Switch>
  </App>
</Provider>


*/
