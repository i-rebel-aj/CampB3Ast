import React, { useState } from "react";
import ForumPage  from "./forumPage";

const ForumControl = () => {
  const [values, updateValue] = useState({
    Type: "",
    username: "",
    password: "",
    name: "",
    collegeId: "",
    department: "",
    gender: "",
    registrationNumber: "",
    enrolledDate: ""
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ForumPage values={values} handleSubmit={updateValue} />
     
    </div>
  );
};

export default ForumControl;