import { Menu } from 'antd';
import { database } from 'firebase';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.png";
import styles from "./AppHeader.module.css";

// TODO: Create your own header.
export default function AppHeader () {
  return (
    <>
      <img src={logo} alt="logo" className={styles.logo} />
      <h1>Callendar Apps</h1>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['calendar']}>
        <Menu.Item key="calendar"><Link to='/calendar'>Menu 1</Link></Menu.Item>
        <Menu.Item key="events"><Link to='/events'>Menu 2</Link></Menu.Item>
      </Menu> */}
    </>
  );
}
