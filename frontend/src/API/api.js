import axios from "axios";
import {
  API,
  USERS_OF_ADMIN_INSTITUTE,
  TEST_URL,
  AUTH_LOGIN,
  AUTH_SIGNUP,
  GET_USER,
  ADD_COLLEGE,
  ADD_INSTITUTE_ADMIN,
  GET_INSTITUTE,
  GET_ADMIN,
  ASSIGN_ADMIN,
  CREATE_GET_GROUP,
  ASSIGN_GROUP_TO_USERS,
  BASE_URL,
} from "../constants";
import { BehaviorSubject } from "rxjs";

export default {
  getUsers: (Type, token) =>
    axios({
      method: "GET",
      url: `${TEST_URL}${API}${USERS_OF_ADMIN_INSTITUTE}`,
      headers: { "x-auth-token": token },
      params: {
        Type: Type,
      },
    }),
  getUser: (username) =>
    axios({
      method: "GET",
      url: `${TEST_URL}${API}${GET_USER}`,
      headers: {},
      params: {
        username: username,
      },
    }),
  login: (username, password) =>
    fetch(`${TEST_URL}${API}${AUTH_LOGIN}`, {
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
    fetch(`${TEST_URL}${API}${AUTH_SIGNUP}`, {
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
        instituteName: data.instituteName,
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
    fetch(`${TEST_URL}${API}${ADD_COLLEGE}`, {
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
    fetch(`${TEST_URL}${API}${ADD_INSTITUTE_ADMIN}`, {
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
    fetch(`${TEST_URL}${API}${GET_INSTITUTE}`, {
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
    fetch(`${TEST_URL}${API}${GET_ADMIN}`, {
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
    fetch(`${TEST_URL}${API}${ASSIGN_ADMIN}`, {
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
  addGroup: (groupName, groupDescription, token) =>
    fetch(`${TEST_URL}${API}${CREATE_GET_GROUP}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        groupName: groupName,
        groupDescription: groupDescription,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
  getGroups: (token) =>
    fetch(`${TEST_URL}${API}${CREATE_GET_GROUP}`, {
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
  assignGroup: (userids, groupName, token) =>
    fetch(`${TEST_URL}${API}${ASSIGN_GROUP_TO_USERS}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        userids: userids,
        groupName: groupName,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
};
