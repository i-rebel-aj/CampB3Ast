import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Card, Button, Container } from "react-bootstrap";
var util = require("util");

var dataArr = [];
const variants = [
  "Primary",
  "Secondary",
  "Success",
  "Danger",
  "Warning",
  "Info",
  "Light",
  "Dark",
];

for (var i = 0; i < 200; i++) {
  dataArr.push({
    name: util.format("Post-%s", i),
    description: util.format("This is the description #%d", i),
  });
}

const CommentList = (props) => {
  let commentNodes = props.data.map(function (item, index) {
    let variant = variants[Math.floor(Math.random() * variants.length)];
    if (index > props.offset && index <= props.offset + 10)
      return (
        <div>
          <Card
            bg={variant.toLowerCase()}
            key={index}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "100%", alignSelf: "center" }}
            className="mb-2"
          >
            <Card.Header>Post - {index}</Card.Header>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    else return null;
  });

  return (
    <Container
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: "column",
      }}
    >
      {commentNodes}
    </Container>
  );
};

class SeePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      offset: 0,
    };
  }

  loadCommentsFromServer() {
    this.setState({
      data: dataArr,
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);

    this.setState({ offset: offset }, () => {});
    console.log("OFFSET ", this.state.offset);
  };

  render() {
    return (
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: "column",
        }}
      >
        <CommentList data={this.state.data} offset={this.state.offset} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </Container>
    );
  }
}

export default SeePost;
