import React, { useEffect, useState } from "react";
import SuperAdminCreateAdminControl from "./superAdminCreateAdmin";
import { Alert, Col, Row, Nav } from "react-bootstrap";
import api from "../../API/api";

const SuperAdminCreateAdmin = () => {
  const [values, updateValue] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    collegeId: "",
    gender: "",
    isSubmitted: false,
    isCreated: false,
    isCreating: false,
    message: "",
    error: false,
  });

  useEffect(() => {
    if (values.isSubmitted) {
      updateValue({ ...values, isCreating: true });
      console.log("Values", values);
      api
        .createAdmin(values)
        .then((response) => {
          console.log("Created ", response);
          updateValue({
            ...values,
            isCreating: false,
            isSubmitted: false,
            message: response.message,
            isCreated:
              response.message ===
              "New admin created please assign him to the college"
                ? true
                : false,
          });
        })
        .catch((error) => {
          console.log(error);
          updateValue({
            ...values,
            error: true,
            isSubmitted: false,
            isCreating: false,
            message: error,
          });
        });
    }
  }, [values.isSubmitted]);

  return (
    <Row>
      <Col
        xs={1}
        style={{
          height: window.innerHeight,
        }}
        className="bg-light"
      >
        <Nav justify variant="pills" activeKey="1" className="d-md-block">
          <Nav.Item>
            <Nav.Link eventKey="1" href="/super-admin/college/add">
              Add College
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" href="/super-admin/admin/create">
              Create Admin
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <SuperAdminCreateAdminControl
          values={values}
          handleSubmit={updateValue}
        />
      </Col>
    </Row>
  );
};

export default SuperAdminCreateAdmin;
