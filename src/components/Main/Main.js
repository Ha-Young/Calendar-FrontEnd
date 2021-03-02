import React, { useState } from "react";
import Header from "../Header/Header";
import Month from "../Calendar/Month/Month";
import Day from "../Calendar/Day/Day";
import Week from "../Calendar/Week/Week";
import styles from "./Main.module.css";

import AddEventButton from "../Button/AddEventButton";

import { Modal } from "antd";

import { Route, Switch } from "react-router-dom";

export default function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.header}`}>
        <Header />
      </div>
      <div className={`${styles.main}`}>
        <Modal
          title="Add event!"
          centered={true}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Switch>
          <Route path="/Day">
            <Day />
          </Route>
          <Route path="/Week">
            <Week />
          </Route>
          <Route path="/Month">
            <Month />
          </Route>
          <Route path="/Event">
            <div>Event</div>
          </Route>
        </Switch>
        <AddEventButton
          onClick={() => {
            console.log("clicked");
            showModal();
          }}
        />
      </div>
    </div>
  );
}
