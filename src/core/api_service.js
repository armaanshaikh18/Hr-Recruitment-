import URLS from "../config/api_endpoints";
import {
  getAccessToken,
  getUserId,
} from "../../utils/token";

import { ACCESS_TOKEN_TYPES, USER_ID_TYPES } from "../../../utils/constants/localstorage-types";

const getHeaders = () => {
  const headers = {};
//   const apiKey = "auth_key";
//   headers[apiKey] = "C9941611DF64B";
//   return headers;
};

const post = async (url, data = {}, type) => {
//   const userId = getUserId(USER_ID_TYPES[type]);
//   const accessToken = getAccessToken(ACCESS_TOKEN_TYPES[type]);
  if (accessToken !== null);
  data = Object.assign(data, {
    user_id: parseInt(userId, 10),
    access_token: accessToken,
  });

  let response = {};
  const URL = `${URLS[PROJECT_TYPES_URL[type]]}${url}`;
  await fetch(`${URL}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: getHeaders(),
  })
    .then(async (result) => {
      response = await result.json();
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

const get = async (url, type) => {
  let response = {};
  const URL = `${URLS[PROJECT_TYPES_URL[type]]}${url}`;
  await fetch(`${URL}`, {
    method: "GET",
  })
    .then(async (result) => {
      response = await result.json();
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export default { get, post };
