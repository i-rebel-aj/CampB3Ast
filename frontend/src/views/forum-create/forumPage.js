import React, { useState } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";


function ForumPage ({ handleSubmit, values }){
  
    const [currentData, updateCurrentData] = useState({
        forumName: "",
        forumDescription: "",
        forumType: ""
    });
    //console.log(values.forumType);
    return (
      <div>
        <div>
          <h1>Create a Forum...</h1>
        </div>
  <div>
<Form>
<Form.Row>
<Form.Group as={Col} md="12" controlId="validationFormikUsername">
  <Form.Label><strong>Forum Name</strong></Form.Label>
  <InputGroup>
    
    <Form.Control
      type="text"
      placeholder="Forum Name"
      value={currentData.forumName}
      onChange={(e) =>
        updateCurrentData({
          ...currentData,
          forumName: e.target.value,
        })
      }
    />
  </InputGroup>
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} md="12" controlId="validationFormik03">
  <Form.Label><strong>Forum Description</strong></Form.Label>
  <Form.Control as="textarea" rows={3}
    type="text"
    placeholder="Forum Description"
    value={currentData.forumDescription}
    onChange={(e) =>
      updateCurrentData({
        ...currentData,
        forumDescription: e.target.value,
      })
    }
  />
</Form.Group>
</Form.Row>

<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label><strong>Form Type</strong></Form.Label>
    <Form.Control as="select"
    value={currentData.forumType}
    onChange={(e) =>{
      updateCurrentData({
        ...currentData,
        forumType: e.target.value,
      });
     // console.log(currentData)
    }
    }
    >
      <option value = "Public">Public</option>
      <option value = "Private">Private</option>
      </Form.Control>
    </Form.Group>

<Button
onClick={() => {
  handleSubmit({
        forumName: currentData.forumName,
        forumDescription: currentData.forumDescription,
        forumType: currentData.forumType
  });

  console.log(currentData)
}}
>
Submit form
</Button>

</Form>
      </div>
      </div>     

  );
}

export default ForumPage;