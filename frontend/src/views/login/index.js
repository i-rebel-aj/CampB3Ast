import React, { useEffect, useState } from "react";
import { LoginForm } from "../../components";
import { Alert, Button } from "react-bootstrap";
import { BehaviorSubject } from "rxjs";
import api from "../../API/api";
import { authenticate, isAutheticated } from "../../_helpers";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSuccess, authError } from "../../redux/auth/authActions";

const Login = (props) => {
  const [values, updateValue] = useState({
    username: "",
    password: "",
    isSubmitted: false,
    loggingIn: false,
    error: false,
  });

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (values.isSubmitted) {
      updateValue({ ...values, loggingIn: true });
      api
        .login(values.username, values.password)
        .then((response) => {
          authenticate(response, () => {
            updateValue({
              ...values,
              loggingIn: false,
              isSubmitted: false,
            });
          });
          dispatch(authSuccess(response["user"]));
        })
        .catch((error) => {
          console.log(error);
          updateValue({
            ...values,
            error: true,
            isSubmitted: false,
          });
        });
    }
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
