import React, { useState } from "react";
import { Jumbotron, Row, Col, Badge, Container } from "react-bootstrap";

const data = {
  username: "ishanarya0",
  name: "Ishan Arya",
  email: "ishan.arya@iiitg.ac.in",
  collegeName: "IIITG",
  forums: [
    "cse",
    "gaming",
    "react",
    "batch2018",
    "friends",
    "photography",
    "dsa",
    "music",
  ],
  department: "CSE",
};

const variants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
function myFunction(data) {
  return data.map((item) => (
    <>
      <Badge
        pill
        variant={variants[Math.floor(Math.random() * variants.length)]}
      >
        {item}
      </Badge>{" "}
    </>
  ));
}

const Profile = () => {
  const [profileState, updateProfile] = useState({
    username: data.username,
    name: data.name,
    email: data.email,
    collegeName: data.collegeName,
    forums: data.forums,
    department: data.department,
  });

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>{profileState.name}</h1>
          <Row>
            <Col>Username: {profileState.username}</Col>
            <Col>Email: {profileState.email}</Col>
          </Row>
          <Row>
            <Col>Department: {profileState.department}</Col>
            <Col>College: {profileState.collegeName}</Col>
          </Row>
          <br />
          {myFunction(profileState.forums)}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Profile;
