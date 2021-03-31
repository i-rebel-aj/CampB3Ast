import React, { useState } from "react";
import FormSignup  from "./FormSignup";

const Login = () => {
  const [values, updateValue] = useState({
    username: "",
    password: "",
    isSubmitted: false
  });


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormSignup values={values} handleSubmit={updateValue} />
      

    </div>
  );
};

export default Login;