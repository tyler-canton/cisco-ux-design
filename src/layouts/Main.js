import {
  Container,
  Dropdown,
  Form,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Message,
  Segment,
  Select,
  Sidebar,
  Tab
} from "semantic-ui-react";

import React from "react";

// Low State Components
import { HostedBuilder } from "../components/HostedBuilder";
import { VirtualBuilder } from "../components/VirtualBuilder";
import { UserBuilder } from "../components/UserBuilder";
import { ArtxBuilder } from "../components/ArtxBuilder";
import { ModalVirtualRepoConfig } from "../layouts/Modals/ModalVirtualRepoConfig";
import { ModalRepoBuilder } from "../layouts/Modals/ModalRepoBuilder";
import { ModalLogs } from "../layouts/Modals/ModalLogs";
import { options, repoState } from "../constants";
import { Aux } from "../hocs/Aux";
import { ModalArtifactory } from "./Modals/ModalArtifactory";
import { ModalImport } from "./Modals/ModalImport";
import { HelpInline } from "./Presentation/HelpInline";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      check: {},
      value: [],
      searchQuery: null,
      open: false,
      activeItem: "MAVEN",
      items: [
        "MAVEN",
        "YUM",
        "DOCKER",
        "NPM",
        "PYPI",
        "DEBIAN",
        "RUBYGEM",
        "GENERIC",
        "CONAN"
      ],
      repos: [],
      users: ["tcanton"],
      artx: {
        extrepo: [],
        users: [],
        accesslevel: []
      }
    };
  }
  handleHideSidebarClick = () => this.setState({ visible: false });
  handleShowSidebarClick = () => this.setState({ visible: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  showModal = (dimmer, modalName) => {
    this.setState({
      dimmer,
      check: {
        [modalName]: modalName.length > 0
      }
    });
  };

  clicker = () => {
    console.log(this.state);
  };

  close = modalName =>
    this.setState({ open: false, check: { [modalName]: false } });

  addItemHandler = repoName => {
    let newRepos = [...this.state.repos];
    let server = {
      type: "",
      hControls: [
        { control: "Input", formValue: "Name Required" },
        { control: "Select", formValue: "Required" }
      ],
      vControls: [],
      users: [],
      artx: []
    };

    this.setState({
      repos: [...this.state.repos, server]
    });
  };

  onDeleteHandler = repoIndex => {
    let newRepos = [...this.state.repos];
    newRepos.splice(repoIndex, 1);
    this.setState({
      repos: newRepos
    });
  };

  onAddUserHandler = userIndex => {
    let newUsers = [...this.state.users];
    newUsers.push("");
    this.setState({
      users: newUsers
    });
  };

  onDeleteUserHandler = userIndex => {
    let newUsers = [...this.state.users];
    newUsers.splice(userIndex, 1);
    this.setState({
      users: newUsers
    });
  };

  handleChange = (e, { searchQuery, value }) => {
    this.setState({ searchQuery, value });
  };

  handleChangeRepo = (e, { searchQuery, value }) => {
    let repoBuilder = repoState.filter(function(item) {
      return value.includes(item.type);
    });
    this.setState({ searchQuery, repos: repoBuilder, value });
  };

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  componentDidMount() {
    const newItems = this.state.items.slice(0, 8);
    this.setState({
      items: newItems,
      repos: [],
      users: ["tcanton", "dcyril"],
      artx: [{ name: "bmps-py-server", type: "Docker" }]
    });
  }

  render() {
    const {
      items,
      activeItem,
      check,
      open,
      dimmer,
      users,
      repos,
      artx,
      searchquery,
      value,
      visible
    } = this.state;

    const labels = [
      {
        menuItem: "HOSTED",
        render: () => (
          <Tab.Pane>
            <HostedBuilder
              added={this.addItemHandler}
              deleted={this.onDeleteHandler}
              repos={repos}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "VIRTUAL",
        render: () => (
          <Tab.Pane>
            <VirtualBuilder
              config={true}
              openModal={this.showModal}
              added={this.addItemHandler}
              deleted={this.onDeleteHandler}
              repos={repos}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "USERS",
        render: () => (
          <Tab.Pane>
            <UserBuilder
              config={true}
              addUser={this.onAddUserHandler}
              deleteUser={this.onDeleteUserHandler}
              users={users}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "ARTIFACTORY-X",
        render: () => (
          <Tab.Pane>
            <ArtxBuilder
              searchquery={searchquery}
              clickerr={this.clicker}
              openModal={this.showModal}
              handleChange={this.handleChange}
              handleSearchChange={this.handleSearchChange}
              artx={artx}
            />
          </Tab.Pane>
        )
      }
    ];

    return (
      <Container fluid id="main">
        <Form className="attached fluid segment">
          <Grid padded columns="equal">
            <Grid.Row stretched>
              <Grid.Column width={16}>
                <Segment.Group className="segments-hover">
                  <Segment>
                    <Grid>
                      <Grid.Column width={7}>
                        <List horizontal>
                          <List.Item>
                            <Message positive>
                              <Message.Header as="h6">
                                Status: READY
                              </Message.Header>
                            </Message>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <Message negative>
                                <Message.Header as="h6">
                                  Provision: ERROR
                                </Message.Header>
                              </Message>
                            </List.Content>
                          </List.Item>
                        </List>
                      </Grid.Column>
                    </Grid>
                  </Segment>
                  <Segment>
                    <Form.Group>
                      <Form.Input
                        required
                        width={4}
                        fluid
                        label="Name:"
                        placeholder="Name"
                        type="text"
                      />
                      <Form.Input
                        required
                        width={4}
                        fluid
                        label="Team"
                        placeholder="Team"
                        type="text"
                      />
                      <Form.Input
                        required
                        width={4}
                        label="Type"
                        placeholder="Type"
                        type="text"
                      />
                      <Form.Input
                        width={4}
                        label="Location"
                        type="text"
                        placeholder="Location"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Input
                        width={4}
                        label="Requestor:"
                        placeholder="Requestor"
                        type="text"
                      />
                      <Form.Input
                        width={4}
                        label="Case Number"
                        placeholder="Case Number"
                        type="text"
                      />
                      <Form.Input
                        width={4}
                        label="Notes"
                        placeholder="Notes"
                        type="text"
                      />
                    </Form.Group>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row id="repo-template-builder" stretched>
              <Grid.Column width={16}>
                <Segment.Group className="segments-hover">
                  <Segment className="rtb-header">
                    <Header content="Select Your Repository Type" />
                    <Dropdown icon="bars" floating labeled className="icon">
                      <Dropdown.Menu>
                        <Dropdown.Header content="Service Helper" />
                        <Dropdown.Divider />
                        <Dropdown.Item
                          icon="history"
                          text="History"
                          onClick={this.handleShowSidebarClick}
                        />
                        <Dropdown.Item
                          icon="calendar alternate outline"
                          text="Logs"
                          onClick={() => this.showModal("inverted", "logs")}
                        />
                        <Dropdown.Item
                          icon="code"
                          text="Templates"
                          onClick={() =>
                            this.showModal("inverted", "artifactory")
                          }
                        />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Segment>
                  <Sidebar.Pushable>
                    <Sidebar
                      as={Menu}
                      animation="overlay"
                      vertical
                      direction="right"
                      visible={visible}
                      width="wide">
                      <Menu.Item className="rtb-header">
                        <Header
                          as="h2"
                          icon="history"
                          content="Service History"
                        />
                      </Menu.Item>
                      <Menu.Item>
                        <Icon name="time" />
                        User and Timestamp
                      </Menu.Item>
                      <Menu.Item>
                        <Icon name="time" />
                        User and Timestamp
                      </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher onClick={this.handleHideSidebarClick}>
                      <Segment>
                        <div className="attached fluid segment">
                          <Form.Group widths="equal">
                            <HelpInline
                              control={Select}
                              options={options}
                              labelContent={"Download Access: Anonymous"}
                              labelFor={"form-select-control-download-access"}
                              iconName={"help circle"}
                              placeholder="Server"
                              search={true}
                              popupContent={"Resusable Help Component"}
                            />

                            <Form.Input
                              label="Deployer Password"
                              placeholder="Password"
                              type="password"
                            />
                            <Form.Input
                              label="Notes"
                              placeholder="Notes"
                              type="text"
                            />
                          </Form.Group>
                        </div>
                        <Grid padded>
                          <Grid.Row centered>
                            <Grid.Column width={4}>
                              <Header
                                textAlign="center"
                                block
                                className="blue-solid"
                                name="repo"
                                onClick={() => {
                                  this.showModal("inverted", "repo");
                                }}>
                                <Icon name="server" /> Add Repository
                              </Header>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row stretched>
                            <Grid.Column>
                              <Tab
                                className={"repo-template-builder-tab"}
                                panes={labels}
                              />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Segment>
                    </Sidebar.Pusher>
                  </Sidebar.Pushable>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>

        <ModalVirtualRepoConfig
          value={value}
          searchquery={searchquery}
          handleSearchChange={this.handleSearchChange}
          handleChange={this.handleChange}
          open={check.virtual}
          dimmer={dimmer}
          close={() => {
            this.close("virtual");
          }}
        />

        <ModalRepoBuilder
          value={value}
          searchquery={searchquery}
          handleSearchChange={this.handleSearchChange}
          handleChange={this.handleChangeRepo}
          open={check.repo}
          dimmer={dimmer}
          close={() => {
            this.close("repo");
          }}
        />

        <ModalLogs
          value={value}
          searchquery={searchquery}
          handleSearchChange={this.handleSearchChange}
          handleChange={this.handleChangeRepo}
          open={check.logs}
          dimmer={dimmer}
          close={() => {
            this.close("logs");
          }}
        />

        <ModalArtifactory
          value={value}
          searchquery={searchquery}
          handleSearchChange={this.handleSearchChange}
          handleChange={this.handleChangeRepo}
          open={check.artifactory}
          dimmer={dimmer}
          close={() => {
            this.close("artifactory");
          }}
        />

        <ModalImport
          value={value}
          searchquery={searchquery}
          handleSearchChange={this.handleSearchChange}
          showModal={this.showModal}
          open={check.import}
          dimmer={dimmer}
          close={() => {
            this.close("import");
          }}
        />
      </Container>
    );
  }
}
