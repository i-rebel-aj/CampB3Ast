import React, { useState, useEffect } from "react";
import { Jumbotron, Row, Col, Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../../API/api";

/* const data = {
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
}; */

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
  if (data?.length > 0) {
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
  } else return null;
}

const Profile = () => {
  const { username } = useParams();
  const [profileState, updateProfile] = useState({
    username: "",
    name: "",
    email: "",
    collegeName: "",
    collegeGroups: [],
    department: "",
  });

  useEffect(() => {
    console.log("ye kya hua");
    api
      .getUser(username)
      .then((response) => {
        updateProfile({
          username: response.data.username,
          name: response.data.name,
          email: response.data.email,
          collegeName: response.data.collegeId,
          collegeGroup: [
            "cse",
            "gaming",
            "react",
            "batch2018",
            "friends",
            "photography",
            "dsa",
            "music",
          ],
          department: response.data.department,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
          <Row>{myFunction(profileState.collegeGroup)}</Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Profile;
