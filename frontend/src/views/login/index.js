import React, { useState } from "react";
import { LoginForm } from "../../components";

const Login = () => {
  const [values, updateValue] = useState({
    username: "",
    password: "",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm values={values} handleSubmit={updateValue} />
    </div>
  );
};

export default Login;
