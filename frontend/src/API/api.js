import axios from "axios";
import { BASE_URL, USER_API, USERS_OF_A_COLLEGE } from "../constants";

export default {
  seeUser: (collegeId, Type) =>
    axios({
      method: "GET",
      url: "http://3.17.23.11:3000/api/user/college/",
      headers: {},
      params: {
        collegeId: "IIIT G",
        Type: "Student",
      },
    }),
};
