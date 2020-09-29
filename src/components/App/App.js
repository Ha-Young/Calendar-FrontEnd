import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import { saveSampleData } from '../../utils/api';
import styled from 'styled-components';
import SideBar from '../SideBar/SideBar';
import CalendarContainer from '../Calendar/CalendarContainer/CalendarContainer';

const Trya = styled.div`
  height: 100vh;
  display:grid;
  grid-template-rows: 15% 1fr;
  padding-bottom: 50px;
`;

const Main = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr;
`;

// Feel free to modify as you need.
function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <>
    <Trya>
      <Header />
      <Main>
        <SideBar />
        <CalendarContainer />
      </Main>
      </Trya>
    </>
  );
}

export default App;
