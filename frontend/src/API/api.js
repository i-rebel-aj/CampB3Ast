import axios from "axios";
import {
  API,
  USERS_OF_A_COLLEGE,
  TEST_URL,
  AUTH_LOGIN,
  AUTH_SIGNUP,
  GET_USER,
  ADD_COLLEGE,
  ADD_INSTITUTE_ADMIN,
  GET_INSTITUTE,
  GET_ADMIN,
  ASSIGN_ADMIN,
  BASE_URL,
} from "../constants";
import { BehaviorSubject } from "rxjs";

export default {
  getUsers: (collegeId, Type) =>
    axios({
      method: "GET",
      url: `${BEST_URL}${API}${USERS_OF_A_COLLEGE}`,
      headers: {},
      params: {
        collegeId: collegeId,
        Type: Type,
      },
    }),
  getUser: (username) =>
    axios({
      method: "GET",
      url: `${BEST_URL}${API}${GET_USER}`,
      headers: {},
      params: {
        username: username,
      },
    }),
  login: (username, password) =>
    fetch(`${BEST_URL}${API}${AUTH_LOGIN}`, {
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
    fetch(`${BEST_URL}${API}${AUTH_SIGNUP}`, {
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
  addCollege: (instituteName, instituteDescription, token) =>
    fetch(`${BEST_URL}${API}${ADD_COLLEGE}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        instituteName: instituteName,
        instituteDescription: instituteDescription,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
  createAdmin: (data, token) =>
    fetch(`${BEST_URL}${API}${ADD_INSTITUTE_ADMIN}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        confirmpass: data.confirmpass,
        name: data.name,
        instituteName: data.instituteName,
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
  getInstitutes: (token) =>
    fetch(`${BEST_URL}${API}${GET_INSTITUTE}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
  getAdmins: (token) =>
    fetch(`${BEST_URL}${API}${GET_ADMIN}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
  assignAdmin: (instituteName, email, token) =>
    fetch(`${BEST_URL}${API}${ASSIGN_ADMIN}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        instituteName: instituteName,
        email: email,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
};
