import React, { useState, useEffect } from "react";
import { Row, Col, ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import api from "../../API/api";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { authenticate, isAutheticated } from "../../_helpers";

function buttonFormatter(cell, row) {
  let forum = `/forum/see/${cell}`;
  return (
    <Button href={forum} variant="outline-info">
      Click
    </Button>
  );
}

const columns = [
  {
    dataField: "forumName",
    text: "Forum Name",
    filter: textFilter(),
  },
  {
    dataField: "forumDescription",
    text: "Description",
    filter: textFilter(),
  },
  {
    dataField: "Type",
    text: "Type",
  },
  {
    dataField: "_id",
    text: "Id",
    filter: textFilter(),
  },
  {
    dataField: "forumName",
    text: "More",
    formatter: buttonFormatter,
  },
];

const radios = [
  { name: "Created", value: "created" },
  { name: "Private", value: "private" },
  { name: "Public", value: "public" },
];

const SeeForum = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("created");
  const [values, updateForums] = useState({
    forums: {},
    isFetched: false,
  });

  useEffect(() => {
    const { token } = isAutheticated();
    api
      .getForumsOfLoggedInUser(token)
      .then((response) => {
        console.log(response);
        updateForums({ forums: response, isFetched: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Row>
        <Col>
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          {values.isFetched && (
            <BootstrapTable
              keyField="name"
              data={values.forums[radioValue]}
              columns={columns}
              pagination={paginationFactory()}
              filter={filterFactory()}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default SeeForum;
