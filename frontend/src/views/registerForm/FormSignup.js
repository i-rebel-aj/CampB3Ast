import React, { useState } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";

const FormSignup = ({ handleSubmit }) => {
  const [currentData, updateCurrentData] = useState({
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
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationFormik033">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={currentData.email}
            onChange={(e) =>
              updateCurrentData({
                ...currentData,
                email: e.target.value,
              })
            }
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationFormik03">
          <Form.Label>Name</Form.Label>
          <InputGroup>
            <InputGroup.Prepend></InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Name"
              value={currentData.name}
              onChange={(e) =>
                updateCurrentData({
                  ...currentData,
                  name: e.target.value,
                })
              }
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationFormik03">
            <Form.Label>College ID</Form.Label>
            <InputGroup>
              <InputGroup.Prepend></InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="College ID"
                value={currentData.collegeId}
                onChange={(e) =>
                  updateCurrentData({
                    ...currentData,
                    collegeId: e.target.value,
                  })
                }
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationFormik03">
            <Form.Label>Department</Form.Label>
            <InputGroup>
              <InputGroup.Prepend></InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Department"
                value={currentData.department}
                onChange={(e) =>
                  updateCurrentData({
                    ...currentData,
                    department: e.target.value,
                  })
                }
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationFormik03">
            <Form.Label>Enrolled Date</Form.Label>
            <InputGroup>
              <InputGroup.Prepend></InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Enrolled Date"
                value={currentData.enrolledDate}
                onChange={(e) =>
                  updateCurrentData({
                    ...currentData,
                    enrolledDate: e.target.value,
                  })
                }
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Label>
            <strong>Choose who you are</strong>
          </Form.Label>
          <Form.Control
            as="select"
            value={currentData.Type}
            onChange={(e) => {
              updateCurrentData({
                ...currentData,
                Type: e.target.value,
              });
            }}
          >
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </Form.Control>
        </Form.Row>
        <Form.Row>
          <Form.Control
            as="select"
            value={currentData.gender}
            onChange={(e) => {
              updateCurrentData({
                ...currentData,
                gender: e.target.value,
              });
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Row>
      </Form.Group>

      {currentData.Type === "Student" && (
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Roll Number</Form.Label>
              <InputGroup>
                <InputGroup.Prepend></InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Roll Number"
                  value={currentData.rollNumber}
                  onChange={(e) =>
                    updateCurrentData({
                      ...currentData,
                      rollNumber: e.target.value,
                    })
                  }
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Course</Form.Label>
              <InputGroup>
                <InputGroup.Prepend></InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Course"
                  value={currentData.course}
                  onChange={(e) =>
                    updateCurrentData({
                      ...currentData,
                      course: e.target.value,
                    })
                  }
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Course Duration</Form.Label>
              <InputGroup>
                <InputGroup.Prepend></InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Course Duration"
                  value={currentData.courseDuration}
                  onChange={(e) =>
                    updateCurrentData({
                      ...currentData,
                      courseDuration: e.target.value,
                    })
                  }
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
        </Form>
      )}

      {currentData.Type === "Faculty" && (
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Registration Number</Form.Label>
              <InputGroup>
                <InputGroup.Prepend></InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Registration Number"
                  value={currentData.registrationNumber}
                  onChange={(e) =>
                    updateCurrentData({
                      ...currentData,
                      registrationNumber: e.target.value,
                    })
                  }
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
        </Form>
      )}

      <Button
        onClick={() => {
          handleSubmit({
            Type: currentData.Type,
            username: currentData.username,
            password: currentData.password,
            name: currentData.name,
            email: currentData.email,
            collegeId: currentData.collegeId,
            department: currentData.department,
            gender: currentData.gender,
            enrolledDate: currentData.enrolledDate,
            registrationNumber:
              currentData.Type === "Faculty"
                ? currentData.registrationNumber
                : "",
            rollNumber:
              currentData.Type === "Faculty" ? "" : currentData.rollNumber,
            course: currentData.Type === "Faculty" ? "" : currentData.course,
            courseDuration:
              currentData.Type === "Faculty" ? "" : currentData.courseDuration,
            isSubmitted: true,
          });
        }}
      >
        Submit form
      </Button>
    </Form>
  );
};

export default FormSignup;
