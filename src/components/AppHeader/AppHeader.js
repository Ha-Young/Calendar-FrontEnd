import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AppHeader.module.css';

// TODO: Create your own header.
export default function Header() {
  return (
    <header className={styles.Header}>
      <Link to='/'>
        <h1 className={styles.title}>달력</h1>
      </Link>
      <button type='text' className={styles.previous}>
        이전
      </button>
      <button type='text' className={styles.next}>
        다음
      </button>
      <h2 className={styles.month}>9월</h2>
      <select>
        <option value='하루씩'>하루씩 보기</option>
        <option value='일주일씩'>일주일씩 보기</option>
      </select>
      <Link to='/event'>
        <button type='text' className={styles.create}>
          만들기
        </button>
      </Link>
    </header>
  );
}
