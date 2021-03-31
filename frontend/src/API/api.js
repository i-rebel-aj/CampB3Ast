import axios from "axios";
import { BASE_URL, USER_API, USERS_OF_A_COLLEGE, TEST_URL } from "../constants";
import { BehaviorSubject } from "rxjs";

export default {
  getUsers: (collegeId, Type) =>
    axios({
      method: "GET",
      url: `${TEST_URL}${USER_API}${USERS_OF_A_COLLEGE}`,
      headers: {},
      params: {
        collegeId: collegeId,
        Type: Type,
      },
    }),
  getUser: (username) =>
    axios({
      method: "GET",
      url: `${TEST_URL}${USER_API}`,
      headers: {},
      params: {
        username: username,
      },
    }),
  login: (username, password) =>
    fetch(`${TEST_URL}${USER_API}/auth/login`, {
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
    /*     var d = new Date();
    d.setTime(d.getTime() + exMins * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; */
    localStorage.removeItem("jwt");
    console.log("Logged out");
  },
  // currentUserValue: () => {
  //   if (localStorage.getItem("jwt"))
  //     return JSON.parse(localStorage.getItem("jwt"));
  //   else return null;
  // },
  getLoggedInUser: (token) =>
    fetch(`${TEST_URL}${USER_API}/auth/loggedinuser`, {
      method: "GET",
      headers: {
        'Authorization': 'bearer',
        'x-auth-token': token,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
};
