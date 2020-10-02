import { FETCH_DATA } from '../constants/ActionType';

const initialState = {
  dateState: {},
  detailsList: {},
};
const eventDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        dateState: action.dateState,
        detailsList: action.detailsList,
      };
    default:
      return state;
  }
};

export default eventDataReducer;
