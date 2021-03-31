import React, { useState } from "react";
import ForumPage  from "./forumPage";

const Forum = () => {
  const [values, updateValue] = useState({
    forumName: "",
    forumDescription: "",
    forumType: ""
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

export default Forum;