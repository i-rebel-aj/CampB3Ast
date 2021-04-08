import React, { useState, useEffect } from "react";
import { Nav, Row, Col, Table, Button } from "react-bootstrap";
import "../../css/MyDashboard.css";
import api from "../../API/api";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { authenticate, isAutheticated } from "../../_helpers";

function buttonFormatter(cell, row) {
  return cell ? "YES" : "NO";
}

const columns = [
  {
    dataField: "name",
    text: "Name",
    filter: textFilter(),
  },
  {
    dataField: "username",
    text: "User Name",
    filter: textFilter(),
  },
  {
    dataField: "email",
    text: "Email",
    filter: textFilter(),
  },
  {
    dataField: "gender",
    text: "Gender",
  },

  {
    dataField: "isAssigned",
    text: "Assigned",
    formatter: buttonFormatter,
  },
];

const SuperAdminSeeAdmins = () => {
  const [listItems, updateList] = useState([]);
  const { token } = isAutheticated();
  useEffect(() => {
    api
      .getAdmins(token)
      .then((response) => {
        updateList(response.admins);
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
          <Nav justify variant="pills" activeKey="4" className="d-md-block">
            <Nav.Item>
              <Nav.Link eventKey="1" href="/super-admin/institute/add">
                Add Institute
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="/super-admin/admin/create">
                Create Admin
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" href="/super-admin/admin/assign">
                Assign Admin
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" href="/super-admin/admin/see">
                See Admins
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5" href="/super-admin/institute/see">
                See Institutes
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <BootstrapTable
            keyField="username"
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

export default SuperAdminSeeAdmins;
