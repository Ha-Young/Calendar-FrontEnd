import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Dropdown.module.css";

const Dropdown = function ({ chooseItem, list }) {
  const [isOpen, setIsOpen] = useState(false);
  const [labelItem, setLabelItem] = useState(list[0]);

  function onButtonClick() {
    setIsOpen(isOpen => !isOpen);
  }

  function onItemButtonClick(value) {
    if (labelItem !== value) {
      chooseItem(value);
      setLabelItem(value);
      setIsOpen(isOpen => !isOpen)
    }
  }

  return (
    <div className={`${styles["dropdown"]} ${styles[isOpen ? "open" : ""]}`}>
      <Button className={styles["dropdown-toggle"]} onClick={onButtonClick}>
        {labelItem}
        <span className={styles["caret"]}></span>
      </Button>
      <ul className={styles["dropdown-menu"]}>
        {list.map(item => (
          <li
            key={`${item}`}
            value={item}
            onClick={() => {
              onItemButtonClick(item);
            }}
          >
            <NavLink to="/calendar">{item}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

