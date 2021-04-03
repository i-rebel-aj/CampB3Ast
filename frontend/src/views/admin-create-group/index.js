import React, { useState } from "react";
import { Jumbotron, Nav, Image, Row, Col, Container } from "react-bootstrap";
import image2 from "../../assets/images/Campus-B34st.png";
import "../../css/MyDashboard.css";

import AdminCreateGroupControl from "./adminCreateGroup";

const AdminCreateGroup = () => {
  const [values, updateValue] = useState({
    groupId: "",
    groupName: "",
    groupDescription: "",
  });

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
          <Nav justify variant="pills" activeKey="2" className="d-md-block">
            <Nav.Item>
              <Nav.Link eventKey="1" href="/admin/see">
                See Users
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="/admin/add">
                Add Users
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" href="/admin/update">
                Update Users
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          {/*       <Container>
            <Image src={image2} style={{ marginRight: 50 }} />
          </Container> */}
        </Col>
      </Row>

      <AdminCreateGroupControl values={values} handleSubmit={updateValue} />
    </>
  );
};

export default AdminCreateGroup;
