import * as actionTypes from "../actionTypes";

const inititalState = {
  isLogin: false,
  user: {},
  isError: false,
  // isAuth: localStorage.getItem('authUser')? true: false,
  error: {},
};

export const loginReducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        isLogin: true,
        isError: false,
        error: {},
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: false,
        // user: {...action.payload},
        isAuth: true,
        isError: false,
        error: {},
      };

    case actionTypes.LOGIN_FAILD:
      return {
        ...state,
        isError: true,
        isLogin: false,
        // error: {...action.payload}
      };

    case actionTypes.LOGOUT:
      // localStorage.removeItem('authUser');
      return {
        ...state,
        user: {},
        isAuth: false,
        isError: false,
        error: {},
      };

    default:
      return state;
  }
};
