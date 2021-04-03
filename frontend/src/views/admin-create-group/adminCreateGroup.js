import React, { useState } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";


const AdminCreateGroupControl =  ({ handleSubmit }) => {

    const [currentData, updateCurrentData] = useState({
        groupId: "",
        groupName: "",
        groupDescription: "",   
    });
    
    //console.log(values.forumType);
    return (
      <div>
        <div>
          <h1>Create a Group</h1>
        </div>
  <div>
<Form>

<Form.Row>
<Form.Group as={Col} md="12" controlId="validationFormikUsername">
  <Form.Label><strong>Group Id</strong></Form.Label>
  <InputGroup>
    
    <Form.Control
      type="text"
      placeholder="Group Id"
      value={currentData.groupId}
      onChange={(e) =>
        updateCurrentData({
          ...currentData,
          groupId: e.target.value,
        })
      }
    />
  </InputGroup>
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} md="12" controlId="validationFormikUsername">
  <Form.Label><strong>Group Name</strong></Form.Label>
  <InputGroup>
    
    <Form.Control
      type="text"
      placeholder="Group Name"
      value={currentData.groupName}
      onChange={(e) =>
        updateCurrentData({
          ...currentData,
          groupName: e.target.value,
        })
      }
    />
  </InputGroup>
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} md="12" controlId="validationFormik03">
  <Form.Label><strong>Group Description</strong></Form.Label>
  <Form.Control as="textarea" rows={3}
    type="text"
    placeholder="Group Description"
    value={currentData.groupDescription}
    onChange={(e) =>
      updateCurrentData({
        ...currentData,
        groupDescription: e.target.value,
      })
    }
  />
</Form.Group>
</Form.Row>


<Button
onClick={() => {
  handleSubmit({
    groupId: currentData.groupId,
    groupName: currentData.groupName,
    groupDescription: currentData.groupDescription,
  });
  console.log(currentData)
}}
>
Create Group
</Button>

</Form>
      </div>
      </div>     

  );
}

export default AdminCreateGroupControl;