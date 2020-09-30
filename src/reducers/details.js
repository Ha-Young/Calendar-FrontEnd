import { DETAIL_OPEN, DETAIL_CLOSE } from '../constants/ActionType';

const initialState = {
  detailsState: false,
};

const details = (state = initialState, action) => {
  console.log(state, 'kkk');
  switch (action.type) {
    case DETAIL_OPEN:
      return {
        detailsState: true,
      };
    case DETAIL_CLOSE:
      return {
        detailsState: false,
      };
    default:
      return state;
  }
};

export default details;