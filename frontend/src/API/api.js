import axios from "axios";
import {
  BASE_URL,
  USER_API,
  USERS_OF_A_COLLEGE,
  TEST_URL,
  AUTH_LOGIN,
} from "../constants";
import { BehaviorSubject } from "rxjs";

export default {
  getUsers: (collegeId, Type) =>
    axios({
      method: "GET",
      url: `${BASE_URL}${USER_API}${USERS_OF_A_COLLEGE}`,
      headers: {},
      params: {
        collegeId: collegeId,
        Type: Type,
      },
    }),
  getUser: (username) =>
    axios({
      method: "GET",
      url: `${BASE_URL}${USER_API}`,
      headers: {},
      params: {
        username: username,
      },
    }),
  login: (username, password) =>
    fetch(`${BASE_URL}${USER_API}${AUTH_LOGIN}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
  logout: () => {
    localStorage.removeItem("jwt");
    console.log("Logged out");
  },
  getLoggedInUser: (token) =>
    fetch(`${BASE_URL}${USER_API}/auth/loggedinuser`, {
      method: "GET",
      headers: {
        Authorization: "bearer",
        "x-auth-token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
};
