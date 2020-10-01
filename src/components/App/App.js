import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import { saveSampleData } from '../../utils/api';
import Daily from '../Daily/Daily';
import Weekly from '../Weekly/Weekly';
import Event from '../Events/Event';
import format from 'date-fns/format';

// Feel free to modify as you need.
function App() {
  // const [date, setDate] = useState(format(new Date(), 'yyyy/MM/dd'));
  const [year, setYear] = useState(format(new Date(), 'yyyy'));
  const [month, setMonth] = useState(format(new Date(), 'MM'));
  const [date, setDate] = useState(format(new Date(), 'dd'));
  const [dayOfweek, setDayOfweek] = useState(format(new Date(), 'EEEE'));
  const [isDailyClicked, setIsDailyClicked] = useState('true');
  const [isWeeklyClicked, setIsWeeklyClicked] = useState('false');

  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <Header
        today={`${year}/${month}/${date}`}
        setIsDailyClicked={setIsDailyClicked}
        setIsWeeklyClicked={setIsDailyClicked}
      />
      <Switch>
        <Route exact path='/' exact>
          <Daily day={dayOfweek} date={date} />
        </Route>
        <Route path='/calendar'>
          <Daily day={dayOfweek} date={date} />
        </Route>
        <Route exact path='/weekly'>
          <Weekly />
        </Route>
        <Route path='/events'>
          <Event />
        </Route>
        {/* <Route path='/events/:eventId' component={}/> */}
      </Switch>
    </div>
  );
}

export default App;
