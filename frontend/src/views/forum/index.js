import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Badge,
  Container,
  Spinner,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { authenticate, isAutheticated } from "../../_helpers";
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

const Forum = () => {
  const { forumName } = useParams();
  const [forumDetail, updateProfile] = useState({
    forumName: "",
    forumDescription: "",
    forumType: "",
    isLoading: true,
  });
  console.log("Forum Name", forumName);
  const { token } = isAutheticated();
  useEffect(() => {
    api
      .getForum(forumName, token)
      .then((response) => {
        console.log("USER DATA", response.data.foundForum);
        updateProfile({
          forumName: response.data.foundForum.forumName,
          forumDescription: response.data.foundForum.forumDescription,
          forumType: response.data.foundForum.Type,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Jumbotron>
        {forumDetail.isLoading ? (
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Spinner animation="border" variant="warning" style={{}} />
          </Row>
        ) : (
          <Container>
            <h1>
              {forumDetail.forumType} {" - "}
              {forumDetail.forumName}
            </h1>
            <Row>
              <Col>Description: {forumDetail.forumDescription}</Col>
            </Row>
          </Container>
        )}
      </Jumbotron>
    </div>
  );
};

export default Forum;
