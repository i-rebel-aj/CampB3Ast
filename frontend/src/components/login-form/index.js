import React, { useState } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";

function LoginForm({ handleSubmit }) {
  const [currentData, updateCurrentData] = useState({
    username: "",
    password: "",
  });
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationFormikUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Username"
              value={currentData.username}
              onChange={(e) =>
                updateCurrentData({
                  ...currentData,
                  username: e.target.value,
                })
              }
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationFormik03">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={currentData.password}
            onChange={(e) =>
              updateCurrentData({
                ...currentData,
                password: e.target.value,
              })
            }
          />
        </Form.Group>
      </Form.Row>
      <Button
        onClick={() => {
          handleSubmit({
            username: currentData.username,
            password: currentData.password,
          });
        }}
      >
        Submit form
      </Button>
    </Form>
  );
}

export default LoginForm;
