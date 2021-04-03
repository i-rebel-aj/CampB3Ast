import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import api from "../../API/api";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

const columns = [
  {
    dataField: "name",
    text: "Forum Name",
    filter: textFilter(),
  },
  {
    dataField: "collegeId",
    text: "Forum Description",
    filter: textFilter(),
  },
];

const SeeForum = () => {
  const [listItems, updateList] = useState([]);
  useEffect(() => {
    api
      .getUsers("IIIT G", "Student")
      .then((response) => {
        let tempList = [...response.data.user];
        updateList(tempList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Row>
        <Col>
          <BootstrapTable
            keyField="name"
            data={listItems}
            columns={columns}
            pagination={paginationFactory()}
            filter={filterFactory()}
          />
        </Col>
      </Row>
    </>
  );
};

export default SeeForum;
