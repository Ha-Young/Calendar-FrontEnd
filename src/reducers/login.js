import produce from "immer";

const userIdSavedInLocalStorage = localStorage.getItem("googleUserId");
let userId = "";
let checkedLogin = false;

if (userIdSavedInLocalStorage) {
  userId = userIdSavedInLocalStorage;
  checkedLogin = true;
}

const initialState = {
  isLoggedIn: checkedLogin,
  userInfo: {
    userId: userId,
  },
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_ID":
      return produce(state, draft => {
        draft.isLoggedIn = action.loginState;
        draft.userInfo.userId = action.userId;
      });
    default:
      return state;
  }
};
