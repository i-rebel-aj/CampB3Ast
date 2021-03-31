import React, { useEffect, useState } from "react";
import { LoginForm } from "../../components";
import { Alert, Button } from "react-bootstrap";
import { BehaviorSubject } from "rxjs";
import api from "../../API/api";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [values, updateValue] = useState({
    username: "",
    password: "",
    isSubmitted: false,
  });

  const history = useHistory();

  useEffect(() => {
    if (values.isSubmitted) {
      console.log(values.username, values.password);
      api
        .login(values.username, values.password)
        .then((response) => {
          console.log("Tokennn", response["token"]);
          localStorage.setItem("jwt", response["token"]);

          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (localStorage.getItem("jwt")) {
      let token = localStorage.getItem("jwt");
      console.log(`Bearer ${token}`);
      api
        .getLoggedInUser(token)
        .then((response) => {
          console.log(response);

          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    updateValue({ ...values, isSubmitted: false });
  }, [values.isSubmitted]);
  /* postLoginDataHandler = () => {
    axios.post('');
  } */

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {localStorage.getItem("jwt") ? (
        <>
          <Alert variant={"success"}>Succesfully Logged In!</Alert>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            Goto Home
          </Button>
        </>
      ) : (
        <LoginForm values={values} handleSubmit={updateValue} />
      )}
    </div>
  );
};

export default Login;
