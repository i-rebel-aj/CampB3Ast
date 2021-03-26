import React, { Component } from "react";
import ReactPaginate from "react-paginate";
var util = require("util");

var dataArr = [];

for (var i = 0; i < 200; i++) {
  dataArr.push({
    name: util.format("user-%s", i),
    description: util.format("This is the comment #%d", i),
  });
}

const CommentList = (props) => {
  let commentNodes = props.data.map(function (item, index) {
    if (index > props.offset && index < props.offset + 10)
      return (
        <div key={index}>
          {item.name}
          {item.description}
        </div>
      );
  });

  return (
    <div>
      <div>{props.offset}</div>
      <div>
        <ul>{commentNodes}</ul>
      </div>
    </div>
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
      <div className="commentBox">
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
      </div>
    );
  }
}

export default SeePost;
