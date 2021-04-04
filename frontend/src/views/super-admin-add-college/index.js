import React, { useState, useEffect } from "react";
import { Jumbotron, Nav, Image, Row, Col, Container } from "react-bootstrap";
import api from "../../API/api";
import image2 from "../../assets/images/Campus-B34st.png";
import "../../css/MyDashboard.css";

import SuperAdminAddCollegeControl from "./superAdminAddCollege";

const SuperAdminAddCollege = () => {
  const [values, updateValue] = useState({
    collegeName: "",
    collegeDescription: "",
    isSubmitted: false,
    addingCollege: true,
    error: false,
    isAdded: true,
  });

  useEffect(() => {
    if (values.isSubmitted) {
      updateValue({ ...values, addingCollege: true });
      api
        .addCollege(values.collegeName, values.collegeDescription)
        .then((response) => {
          console.log("Added Clg ", response);
          updateValue({
            ...values,
            addingCollege: false,
            isSubmitted: false,
            message: response.message,
            isAdded:
              response.message === "College added successfully" ? true : false,
          });
        })
        .catch((error) => {
          console.log(error);
          updateValue({
            ...values,
            error: true,
            isSubmitted: false,
          });
        });
    }
  }, [values.isSubmitted]);

  return (
    <>
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
          <SuperAdminAddCollegeControl
            values={values}
            handleSubmit={updateValue}
          />
        </Col>
      </Row>
    </>
  );
};

export default SuperAdminAddCollege;
