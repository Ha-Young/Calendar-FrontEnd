import { DETAIL_OPEN, DETAIL_CLOSE, DETAIL_CHANGED } from '../constants/ActionType';

const initialState = {
  detailsState: false,
  detailsChanged : false,
  focusedItemIndex: {
    dayIndex: null,
    timeIndex: null,
  },
};

const eventPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_OPEN:
      return {
        ...state,
        detailsState: true,
        focusedItemIndex: {
          dayIndex: state.focusedItemIndex.dayIndex,
          timeIndex: state.focusedItemIndex.timeIndex,
        },
      };
    case DETAIL_CLOSE:
      return {
        ...state,
        detailsState: false,
        focusedItemIndex: {
          dayIndex: null,
          timeIndex: null,
        },
      };
    case DETAIL_CHANGED:
      return {
        ...state,
        detailsChanged: !state.detailsChanged,
      };
    default:
      return state;
  }
};

export default eventPageReducer;
