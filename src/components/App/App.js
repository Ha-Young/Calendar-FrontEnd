import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
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
        <Route path='/' exact>
          <div>Main</div>
        </Route>
        <Route path='/event'>
          <div>Event</div>
        </Route>
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
          <EventContainer> <-> [READ] getState() <-> RX <-> on() <-> FB
            <WeeklyCardList>
              <DailyCard>
                (<div>00:00</div> * 24)(?)
              </DailyCard>
            </WeeklyCardList>
          </EventContainer>
          <NextButton />
        </Calendar>
      </Route>
      <Route path="/event/new">
        <Link path="/calender">
          <BackButton />
        </Link>
        <ModalContainer ?? /> -> [WRITE] dispatch() -> RX -> write() -> FB -> [listener]
      </Route>
      <Redirect to="/calendar">
    </Switch>
  </App>
</Provider>


*/
