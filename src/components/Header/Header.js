import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ToggleButton from './ToggleButton';
import GetDate from './GetDate';

export default function Header () {
  return (
    <header style={{width: '100%'}}>
      <ToggleButton />
      <GetDate />
    </header>
  );
}
