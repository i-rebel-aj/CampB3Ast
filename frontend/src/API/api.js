import axios from "axios";
import {
  BASE_URL,
  USER_API,
  USERS_OF_A_COLLEGE,
  TEST_URL,
  AUTH_LOGIN,
  AUTH_SIGNUP,
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
  signIn: (data) =>
    fetch(`${BASE_URL}${USER_API}${AUTH_SIGNUP}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Type: data.Type,
        username: data.username,
        password: data.password,
        name: data.name,
        collegeId: data.collegeId,
        department: data.department,
        gender: data.gender,
        enrolledDate: data.enrolledDate,
        registrationNumber:
          data.Type === "Faculty" ? data.registrationNumber : "",
        rollNumber: data.Type === "Faculty" ? "" : data.rollNumber,
        course: data.Type === "Faculty" ? "" : data.course,
        courseDuration: data.Type === "Faculty" ? "" : data.courseDuration,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
};
