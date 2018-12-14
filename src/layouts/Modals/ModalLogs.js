import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  Dropdown,
  Modal,
  Button,
  Header,
  Grid,
  List,
  Icon,
  Message
} from "semantic-ui-react";
import { STATUS_VALUES } from "../../helper";
import { Aux } from "../../hocs/Aux";

const columns = [
  {
    Header: "Started By",
    accessor: "modifier"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Started",
    accessor: "started"
  },
  {
    Header: "Completed",
    accessor: "completed"
  }
];
const subcolumns = [
  {
    Header: "Log Status",
    accessor: "log",
    Cell: row => {
      return <div className={row.value.toLowerCase()}>{row.value}</div>;
    },
    maxWidth: 125
  },
  {
    Header: "Log Data",
    accessor: "logdata",
    Cell: row => {
      let name = STATUS_VALUES.find(substring => row.value.includes(substring));
      return <div className={name.toLowerCase()}>{row.value}</div>;
    }
  }
];

const textdata = [
  {
    log: "TRACE",
    logdata:
      "10-12-2018 16:56:43.360 pool-1-thread-1 TRACE com.cisco.ci.sonarqube.apis.SecurityApi - 122169188 - Adding permission admin for group engci-admin "
  },
  {
    log: "ERROR",
    logdata:
      "10-12-2018 16:56:43.360 pool-1-thread-1 ERROR com.cisco.ci.sonarqube.apis.SecurityApi - 122169188 - Adding permission admin for group engci-admin "
  }
];

const data = [
  {
    modifier: "cnestor",
    status: "SUCCESS",
    started: "2018-12-10T16:56:38.448+0000",
    completed: "m2018-12-10T16:56:43.436+0000"
  },
  {
    modifier: "cnestor",
    status: "SUCCESS"
  }
];
export const ModalLogs = props => (
  <Modal
    id="service-log-modal"
    size="fullscreen"
    dimmer={props.dimmer}
    open={props.open}
    onClose={props.close}>
    <Modal.Header textAlign="center">
      <Header as="h2">
        <Icon name="file alternate" />
        <Header.Content> Service Logs</Header.Content>
      </Header>
    </Modal.Header>
    <Modal.Content id={"virtual-repo-config-content"}>
      <Grid>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Aux name="react-table">
              <ReactTable
                data={data}
                columns={columns}
                className="-striped -highlight"
                SubComponent={row => {
                  return (
                    <div style={{ padding: "20px" }}>
                      <ReactTable
                        id="sub-react-table"
                        data={textdata}
                        columns={subcolumns}
                        defaultPageSize={3}
                        showPagination={false}
                      />
                    </div>
                  );
                }}
              />
            </Aux>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
    <Modal.Actions>
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Done"
        onClick={props.close}
      />
    </Modal.Actions>
  </Modal>
);
