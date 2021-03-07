import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    &copy; {new Date().getFullYear()} Vanilla Calendar
  </footer>
);

export default Footer;
