import React, { useEffect, useState } from "react";
import FormSignup from "./FormSignup";
import { Alert } from "react-bootstrap";
import api from "../../API/api";

const SignUp = () => {
  const [values, updateValue] = useState({
    Type: "",
    username: "",
    password: "",
    name: "",
    email: "",
    collegeId: "",
    department: "",
    gender: "",
    registrationNumber: "",
    enrolledDate: "",
    rollNumber: "",
    course: "",
    courseDuration: "",
    isSubmitted: false,
    signingIn: false,
    isRegistered: false,
    message: "",
    error: false,
  });

  useEffect(() => {
    if (values.isSubmitted) {
      updateValue({ ...values, loggingIn: true });
      console.log("Values", values);
      api
        .signIn(values)
        .then((response) => {
          console.log("Rgistered ", response);
          updateValue({
            ...values,
            signingIn: false,
            isSubmitted: false,
            message: response.message,
          });
        })
        .catch((error) => {
          console.log(error);
          updateValue({
            ...values,
            error: true,
            isSubmitted: false,
            signingIn: false,
            message: error,
          });
        });
    }
  }, [values.isSubmitted]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormSignup values={values} handleSubmit={updateValue} />
      <Alert variant={"success"}>Succesfully Logged In!</Alert>
      {values.Type}
      {"\n username "}
      {values.username}
      {" pass "}
      {values.password}
      {" namw "}
      {values.name}
      {" email "}
      {values.email}
      {" roll "}
      {values.rollNumber}
      {" Colg id "}
      {values.collegeId}
      {" RegNo "}
      {values.registrationNumber}
      {" EnDt "}
      {values.enrolledDate}
      {" Course "}
      {values.course}
      {" Course Dur "}
      {values.courseDuration}
      {" Gender "}
      {values.gender}
    </div>
  );
};

export default SignUp;
