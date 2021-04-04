import React, { useState } from "react";
import { Form, Col, Button, InputGroup, Alert } from "react-bootstrap";

const SuperAdminAddCollegeControl = ({ handleSubmit, values }) => {
  const [currentData, updateCurrentData] = useState({
    collegeName: "",
    collegeDescription: "",
  });

  //console.log(values.forumType);
  return (
    <div>
      <div>
        <h1>Add a College</h1>
      </div>
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label>
                <strong>College Name</strong>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="College Name"
                  value={currentData.collegeName}
                  onChange={(e) =>
                    updateCurrentData({
                      ...currentData,
                      collegeName: e.target.value,
                    })
                  }
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>
                <strong>College Description</strong>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="College Description"
                value={currentData.collegeDescription}
                onChange={(e) =>
                  updateCurrentData({
                    ...currentData,
                    collegeDescription: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>

          <Button
            onClick={() => {
              handleSubmit({
                collegeName: currentData.collegeName,
                collegeDescription: currentData.collegeDescription,
                isSubmitted: true,
              });
              console.log(currentData);
            }}
          >
            Add College
          </Button>
          {values.message && (
            <Alert variant={values.isAdded ? "success" : "danger"}>
              {values.message}
            </Alert>
          )}
        </Form>
      </div>
    </div>
  );
};

export default SuperAdminAddCollegeControl;
