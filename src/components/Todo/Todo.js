import React from 'react';
import styles from './Todo.module.css';

const timeRange = new Array(23).fill(0);

function Todo () {
  return (
    <div className={styles.TodoOutline}>
      {
        timeRange.map((index) => <div className={styles.Todo} key={index} />)
      }
    </div>
  );
}

export default Todo;
