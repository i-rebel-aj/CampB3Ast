import axios from "axios";
import { BASE_URL, USER_API, USERS_OF_A_COLLEGE } from "../constants";

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
    axios({
      method: "POST",
      url: `${BASE_URL}${USER_API}`,
      headers: {},
      params: {
        username: username,
        password: password
      },
    })
};
