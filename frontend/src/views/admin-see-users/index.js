import React, { useState, useEffect } from "react";
import { Nav, Row, Col, Table, Button } from "react-bootstrap";
import "../../css/MyDashboard.css";
import api from "../../API/api";

const AdminSeeUsers = () => {
  const [listItems, updateList] = useState([]);
  useEffect(() => {
    api
      .getUsers("IIIT G", "Student")
      .then((response) => {
        console.log({ ...response });
        let myList = [...response.data.user];
        let tempList = [];
        for (const [key, value] of Object.entries(myList)) {
          let profile = `/profile/${value.username}`;
          tempList.push(
            <tr>
              <td>{key}</td>
              <td>{value.name}</td>
              <td>{value.collegeId}</td>
              <td>{value.course}</td>
              <td>{value.batch}</td>
              <td>{value.department}</td>
              <td>{value.enrolledDate}</td>
              <td>{value.gender}</td>
              <td>
                <Button href={profile} variant="outline-info">
                  Info
                </Button>
              </td>
            </tr>
          );
        }
        updateList(tempList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>College</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Branch</th>
                <th>Enrolled Date</th>
                <th>Gender</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>{listItems}</tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default AdminSeeUsers;
