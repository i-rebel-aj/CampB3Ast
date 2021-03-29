import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Post  from "./Post";

const PostControl = () => {
   const { id } = useParams();
  const [values, updateValue] = useState({
    postTitle: "",
    postDescription: ""
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post values={values} handleSubmit={updateValue} />
      {id}
      
    </div>
  );
};

export default PostControl;