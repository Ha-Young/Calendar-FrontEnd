import React from 'react';

const date = (
  state = {
    year: 2000,
    month: 1,
    day: 1,
  },
  action
) => {
  console.log('date',state) //3번 실행 되는 이유는?
  switch (action.type) {
    default:
      return state;
  }
};

export default date;