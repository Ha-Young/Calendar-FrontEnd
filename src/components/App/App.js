import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import Calendar from '../Calendar/Calendar'
import LogIn from '../LogIn/LogIn'
import { saveSampleData } from '../../utils/api';
import { SiGooglecalendar } from 'react-icons/si';

function App() {

  const userState = {
    isLogIn: false,
    name: '',
    email: '',
    photo: '',
  }

  const [isLogIn, setIsLogIn] = useState(userState);

  console.log(isLogIn)

  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      {isLogIn &&
        <>
          <div className={styles.title}>
            Coogle Calendar
            <SiGooglecalendar className={styles.logo} />
          </div>
          <Route path="/login">
            <LogIn setIsLogIn={setIsLogIn} />
          </Route>
        </>
      }



      {/* {isLogIn &&
         <>
       <Header />
       <Switch>
         <Route path="/" exact>
           <Calendar />
         </Route>
         <Route path="/event">
           <div>Event</div>
         </Route>
       </Switch>
       </>
      } */}
    </div>
  );
}

export default App;
