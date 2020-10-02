import * as types from '../constants';
import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction(types.SET_USER);

export const toggleWeeklyAndDaily = createAction(types.TOGGLE_WEEKLY_AND_DAILY);

export const moveNextDay = createAction(types.MOVE_NEXT_DAY);
export const movePrevDay = createAction(types.MOVE_PREV_DAY);

export const setInitData = createAction(types.SET_INIT_DATA);
