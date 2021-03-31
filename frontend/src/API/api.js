import axios from "axios";
import { BASE_URL, USER_API, USERS_OF_A_COLLEGE } from "../constants";
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
    fetch(`${BASE_URL}${USER_API}/auth/login`, {
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
  currentUserValue: () => {
    if (localStorage.getItem("jwt"))
      return JSON.parse(localStorage.getItem("jwt"));
    else return null;
  },
  getLoggedInUser: (token) =>
    fetch(`${BASE_URL}${USER_API}/auth/loggedinuser`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
};
