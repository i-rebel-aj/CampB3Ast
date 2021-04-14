import axios from "axios";

import {
  API,
  USERS_OF_ADMIN_INSTITUTE,
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
  CREATE_FORUM,
  FORUMS_OF_LOGGEDIN_USER,
} from "../constants/apiEndpoints";

import { TEST_URL, BASE_URL } from "../endpoints";
import { BehaviorSubject } from "rxjs";
export default {
  getUsers: (Type, token) =>
    axios({
      method: "GET",
      url: `${BASE_URL}${API}${USERS_OF_ADMIN_INSTITUTE}`,
      headers: { "x-auth-token": token },
      params: {
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
    fetch(`${BASE_URL}${API}${ADD_COLLEGE}`, {
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
    fetch(`${BASE_URL}${API}${ADD_INSTITUTE_ADMIN}`, {
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
    fetch(`${BASE_URL}${API}${GET_INSTITUTE}`, {
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
    fetch(`${BASE_URL}${API}${GET_ADMIN}`, {
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
    fetch(`${BASE_URL}${API}${ASSIGN_ADMIN}`, {
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
    fetch(`${BASE_URL}${API}${CREATE_GET_GROUP}`, {
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
    fetch(`${BASE_URL}${API}${CREATE_GET_GROUP}`, {
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
    fetch(`${BASE_URL}${API}${ASSIGN_GROUP_TO_USERS}`, {
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
  createForum: (forumName, forumDescription, Type, memberLimit, token) =>
    fetch(`${BASE_URL}${API}${CREATE_FORUM}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        forumName: forumName,
        forumDescription: forumDescription,
        Type: Type,
        memberLimit: memberLimit,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      }),
  getForumsOfLoggedInUser: (token) =>
    fetch(`${BASE_URL}${API}${FORUMS_OF_LOGGEDIN_USER}`, {
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
};
