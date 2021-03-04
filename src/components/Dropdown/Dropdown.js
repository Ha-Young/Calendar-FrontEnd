import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Dropdown.module.css";

const Dropdown = function ({ chooseItem, list, createItemTag }) {
  const [isOpen, setIsOpen] = useState(false);
  const [labelItem, setLabelItem] = useState(list[0]);

  function handleToggleButtonClick() {
    setIsOpen(isOpen => !isOpen);
  }

  function handleItemClick(value) {
    chooseItem(value);
    setLabelItem(value);
    setIsOpen(isOpen => !isOpen);
  }

  useEffect(() => {
    chooseItem(labelItem);
  }, []);

  return (
    <div className={`${styles["dropdown"]} ${styles[isOpen ? "open" : ""]}`}>
      <Button className={styles["dropdown-toggle"]} onClick={handleToggleButtonClick}>
        {labelItem}
        <span className={styles["caret"]}></span>
      </Button>
      <ul className={styles["dropdown-menu"]}>
        {list.map((item, i) => (
          <li
            key={`${item}${i}`}
            value={item}
            onClick={() => {
              handleItemClick(item);
            }}
          >
            {createItemTag(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

