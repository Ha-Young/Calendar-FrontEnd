import { UPDATE_EVENT_FORM } from "../../../constants/actionTypes";

export const updateEventForm = (formData) => ({
  type: UPDATE_EVENT_FORM,
  payload: formData,
});
