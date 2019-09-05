import { type } from "os";

const SET_USER_INFO = "SET_USER_INFO";

const initialState = {
  userInfo: null
};

export const setUserInfo = (userInfo: object) => ({
  type: SET_USER_INFO,
  userInfo
});

export default (state = initialState, payload: any) => {
  console.log('payload: ', payload);
  switch (payload.type) {
    case SET_USER_INFO:
      return { ...state, userInfo: payload.userInfo};

    default:
      return state;
  }
};
