import React, { useState } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";


function Post ({ handleSubmit, values }){
  
    const [currentData, updateCurrentData] = useState({
        postTitle: "",
        postDescription: "",
    });
    return (
      <div>
        <div>
          <h1>Post Whatever You Want...</h1>
        </div>
  <div>
<Form>
<Form.Row>
<Form.Group as={Col} md="12" controlId="validationFormikUsername">
  <Form.Label><strong>Post Title</strong></Form.Label>
  <InputGroup>
    
    <Form.Control
      type="text"
      placeholder="Post Title"
      value={currentData.postTitle}
      onChange={(e) =>
        updateCurrentData({
          ...currentData,
          postTitle: e.target.value,
        })
      }
    />
  </InputGroup>
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} md="12" controlId="validationFormik03">
  <Form.Label><strong>Post Description</strong></Form.Label>
  <Form.Control as="textarea" rows={3}
    type="text"
    placeholder="POst Description"
    value={currentData.postDescription}
    onChange={(e) =>
      updateCurrentData({
        ...currentData,
        postDescription: e.target.value,
      })
    }
  />
</Form.Group>
</Form.Row>


<Button
onClick={() => {
  handleSubmit({
    postTitle: currentData.postTitle,
    postDescription: currentData.postDescription,
  });  
  console.log(currentData);
}
}
>
Post 
</Button>

</Form>
      </div>
      
      </div>     



  );
}

export default Post;