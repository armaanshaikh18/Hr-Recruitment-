// import { showErrorNotification, showSuccessNotification } from '../../utility';
import * as actionTypes from "../actionTypes";

// const configToast = {
//     position: "top-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: false,
//     progress: undefined,
// }

export const loginActionStart = () => {
  return {
    type: actionTypes.LOGIN_START,
    payload: "",
  };
};

export const loginActionSuccess = () => {
  // showSuccessNotification('Login Successfully!', configToast)
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: "",
  };
};

export const loginActionFaild = () => {
  // showErrorNotification(error?.data?.message, configToast)
  return {
    type: actionTypes.LOGIN_FAILD,
    payload: "",
  };
};

export const logoutAction = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
