// import { getAccessToken, getUserId } from "../utils/token";
// import { checkERC20Validation } from "../services/api/nft";
// service to validate user signup form
export const validateUserSignup = (values) => {
  const errors = {};

  // Validate Name
  if (typeof values.name !== "string" || values.name.trim() === "") {
    errors.name = "Name must not be empty";
  }
  
  // Validate User Name
  if (typeof values.username !== "string" || values.username.trim() === "") {
    errors.username = "User Name must not be empty";
  }

  // Validate Mobile Number
  if (typeof values.mobile !== "string" || values.mobile.trim() === "") {
    errors.mobile = "Mobile Number must not be empty";
  }

  // Validate Password
  if (typeof values.password !== "string" || values.password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  // Validate Confirm Password
  if (
    typeof values.confirmPassword !== "string" ||
    values.confirmPassword.trim() === ""
  ) {
    errors.confirmPassword = "Confirm Password must not be empty";
  }

  // Validate Password Match
  if (
    values.password &&
    values.confirmPassword &&
    values.password.trim() !== values.confirmPassword.trim()
  ) {
    errors.confirmPassword = "Password does not match";
  }

  return errors;
};
// service to validate user login form
export const validateUserLogin = (values) => {
  const errors = {};

  if (typeof values.email !== "string" || values.email.trim() === "") {
    errors.email = "Email must not be empty";
  }
  // Validate User Name
  //   if (typeof values.login !== "string" || values.login.trim() === "") {
  //     errors.login = "User Name must not be empty";
  //   }

  // Validate Password
  if (typeof values.password !== "string" || values.password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return errors;
};
// service to validate forget password form
export const validateForgetPassword = (values) => {
  const errors = {};

  // Validate User Name
  if (typeof values.username !== "string" || values.username.trim() === "") {
    errors.username = "User Name must not be empty";
  }

  return errors;
};

// service to validate confirm password form
export const validateConfirmPassword = (values) => {
  const errors = {};

  // Validate User Name
  if (typeof values.username !== "string" || values.username.trim() === "") {
    errors.username = "User Name must not be empty";
  }

  // Validate Confirmation Code
  if (
    typeof values.confirmationCode !== "string" ||
    values.confirmationCode.trim() === ""
  ) {
    errors.confirmationCode = "Confirmation code must not be empty";
  }

  return errors;
};
// service to validate confirm forget password form
export const validateConfirmForgetPassword = (values) => {
  const errors = {};

  // Validate User Name
  if (typeof values.username !== "string" || values.username.trim() === "") {
    errors.username = "User Name must not be empty";
  }

  // Validate Confirmation Code
  if (
    typeof values.confirmationCode !== "string" ||
    values.confirmationCode.trim() === ""
  ) {
    errors.confirmationCode = "Confirmation code must not be empty";
  }

  // Validate Password
  if (typeof values.password !== "string" || values.password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return errors;
};

export const validateConfirmWallet = (values) => {
  const errors = {};
  // Validate Wallet1
  if (typeof values.wallet !== "string" || values.wallet.trim() === "") {
    errors.wallet = "Wallet cannot not be empty";
  }
  // Validate Wallet2
  if (
    typeof values.confirmWallet !== "string" ||
    values.confirmWallet.trim() === ""
  ) {
    errors.confirmWallet = "Confirm Wallet cannot not be empty";
  }

  // Validate Confirmation Code
  if (
    values.wallet &&
    values.confirmWallet &&
    values.wallet.trim() !== values.confirmWallet.trim()
  ) {
    errors.confirmWallet = "Confirm Wallet does not match";
  }

  return errors;
};
export const validateNatureNFT = (values) => {
  const errors = {};
  const num = parseFloat(values.token, 10);
  // Validate Token
  if (typeof values.token !== "string" || values.token.trim() === "") {
    errors.cryptoToken = "Token cannot not be empty";
  }
  console.log(values.minToken > num);
  if (values.minToken > num) {
    errors.cryptoToken = "Minimum Token is Required";
  }
  // Validate CryptoToken
  if (
    typeof values.cryptoToken !== "string" ||
    values.cryptoToken.trim() === ""
  ) {
    errors.cryptoToken = "Crypto Token cannot not be empty";
  }
  return errors;
};
export const validateQRCode = (values) => {
  const errors = {};
  // Validate OTP
  if (typeof values.password !== "string" || values.password.trim() === "") {
    errors.password = "OTP cannot not be empty";
  }
  return errors;
};

// export const checkERC20 = async (values) => {
//   const data = {
//     address: values,
//   };
//   const result = await checkERC20Validation(data);
//   return result;
// };
// export const validateToken = (values) => {
//   const errors = {};
//   // Validate Token
//   if (typeof values.token !== "string" || values.token.trim() === "") {
//     errors.token = "Token cannot not be empty";
//   }
//   return errors;
// };
