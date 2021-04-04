import axios from "axios";
import {
  BASE_URL,
  API,
  USERS_OF_A_COLLEGE,
  TEST_URL,
  AUTH_LOGIN,
  AUTH_SIGNUP,
  GET_USER,
  ADD_COLLEGE,
  AUTH_ADD_COLLEGE_ADMIN,
} from "../constants";
import { BehaviorSubject } from "rxjs";

export default {
  getUsers: (collegeId, Type) =>
    axios({
      method: "GET",
      url: `${BASE_URL}${API}${USERS_OF_A_COLLEGE}`,
      headers: {},
      params: {
        collegeId: collegeId,
        Type: Type,
      },
    }),
  getUser: (username) =>
    axios({
      method: "GET",
      url: `${BASE_URL}${API}${GET_USER}`,
      headers: {},
      params: {
        username: username,
      },
    }),
  login: (username, password) =>
    fetch(`${BASE_URL}${API}${AUTH_LOGIN}`, {
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
  signUp: (data) =>
    fetch(`${BASE_URL}${API}${AUTH_SIGNUP}`, {
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
        email: data.email,
        registrationNumber:
          data.Type === "Faculty" ? data.registrationNumber : "",
        rollNumber: data.Type === "Faculty" ? "" : data.rollNumber,
        course: data.Type === "Faculty" ? "" : data.course,
        courseDuration: data.Type === "Faculty" ? "" : data.courseDuration,
        batch: data.Type === "Faculty" ? "" : data.batch,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
  addCollege: (collegeName, collegeDescription) =>
    fetch(`${BASE_URL}${API}${ADD_COLLEGE}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collegeName: collegeName,
        collegeDescription: collegeDescription,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
  createAdmin: (data) =>
    fetch(`${BASE_URL}${API}${AUTH_ADD_COLLEGE_ADMIN}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        name: data.name,
        collegeId: data.collegeId,
        gender: data.gender,
        email: data.email,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
};
