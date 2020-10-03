import { FETCH_DATA } from '../constants/ActionType';

const initialState = {
  detailsList: [],
};
const eventDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        detailsList: action.detailsList,
      };
    default:
      return state;
  }
};

export default eventDataReducer;
