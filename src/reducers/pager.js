import React from 'react';
import { BEFORE, NEXT } from '../constants/ActionType';

const initialState = {
  
};

const pager = (state = initialState, action) => {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
      }
    case BEFORE:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default pager;