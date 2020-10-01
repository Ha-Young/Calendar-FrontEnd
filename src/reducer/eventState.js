import {
  TOGGLE_IS_UPDATING,
  SET_VALIDATION_MESSAGE,
  TOGGLE_IS_OPENED_CONFIRM_MODAL,
} from '../constants';

const initState = {
  isUpdating: false,
  validationMessage: '',
  isOpenedConfirmModal: false,
}

function eventPageCondition(state = initState, action) {
  if (action.type === TOGGLE_IS_UPDATING) {
    return {
      ...state,
      isUpdating: !state.isUpdating,
    };
  }

  if (action.type === SET_VALIDATION_MESSAGE) {
    return {
      ...state,
      validationMessage: action.validationMessage,
    };
  }

  if (action.type === TOGGLE_IS_OPENED_CONFIRM_MODAL) {
    return {
      ...state,
      isOpenedConfirmModal: !state.isOpenedConfirmModal,
    };
  }

  return state;
}

export default {
  eventPageCondition,
}