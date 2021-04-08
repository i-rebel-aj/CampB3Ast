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
  const { user } = isAutheticated();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isAutheticated() ? (
        <>
          <Alert
            variant={"success"}
          >{`${user?.Type} ${user?.name} logged into Campus B34st!`}</Alert>
          <Button
            onClick={() => {
              let path =
                user?.Type == "Super Admin"
                  ? "/super-admin"
                  : user?.Type == "Admin"
                  ? "/admin"
                  : "/";
              history.push(path);
            }}
          >
            {`Goto ${
              user?.Type == "Super Admin"
                ? "Super Admin Panel"
                : user?.Type == "Admin"
                ? "Admin Panel"
                : "Home"
            }`}
          </Button>
        </>
      ) : (
        <LoginForm values={values} handleSubmit={updateValue} />
      )}
    </div>
  );
};

export default Login;
