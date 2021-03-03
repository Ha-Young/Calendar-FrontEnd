import React from "react";
import styles from "./Header.module.scss";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export default function Header({ goPrev, goNext }) {
  return (
    <ul className={styles.Buttons}>
      <li><button type="button" onClick={goPrev}><HiOutlineChevronLeft /></button></li>
      <li><button type="button" onClick={goNext}><HiOutlineChevronRight /></button></li>
    </ul>
  )
}
