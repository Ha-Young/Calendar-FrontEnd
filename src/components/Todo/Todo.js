import React from 'react';
import styles from './Todo.module.css';

const timeRange = new Array(24).fill(0);

const OutlineTodo = () => {
  return (
    <div className={styles.Todo}></div>
  );
}

function Todo () {
  return (
    <div className={styles.Todoline}>
      {
        timeRange.map((index) => {
          return (<OutlineTodo key={index} />);
        })
      }
    </div>
  );
}

export default Todo;
