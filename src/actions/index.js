import React from 'react';

// Action creator
export const login = (user) => {
  // Return an action
  return {
    type: 'LOG_IN',
    isLogIn: false,
    name: '',
    email: '',
    photo: '',
  };
};

