import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

import styles from "./DateHeader.module.css";

export default function DateHeader({ currentDate }) {
  return (
    <header className={styles.DateHeader}>
      <button>
        <MdKeyboardArrowLeft size={30} />
      </button>
      <div>{currentDate}</div>
      <button>
        <MdKeyboardArrowRight size={30} />
      </button>
    </header>
  );
}
