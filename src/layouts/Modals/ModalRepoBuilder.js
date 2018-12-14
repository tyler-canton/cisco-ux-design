import React from "react";
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
import { repos } from "../../constants";
export const ModalRepoBuilder = props => (
  <Modal
    id="repo-builder-modal"
    dimmer={props.dimmer}
    open={props.open}
    onClose={props.close}>
    <Modal.Header textAlign="center">Add Your Repositories </Modal.Header>
    <Modal.Content id={"virtual-repo-config-content"}>
      <Grid columns={2} stackable>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Header as="h2">
              <Header.Subheader>
                <List>
                  <List.Item>
                    <List.Header> Artifactory</List.Header>
                    Artifactory is a global service that distributes your
                    artifacts all over the world. There is a single hostname
                    that you should deploy to and read from, and it will resolve
                    to the server that is physically closest to you. Artifactory
                    service records can be linked to the DMZ instance in the
                    Artifactory-X tab.
                  </List.Item>
                  <List.Item>
                    {" "}
                    Example config for your build management tool:{" "}
                  </List.Item>
                </List>
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Message attached header="Available Repositories" />
            <Dropdown
              fluid
              multiple
              search
              selection
              placeholder="Repositories"
              options={repos}
              searchQuery={props.searchQuery}
              value={props.value}
              onChange={props.handleChange}
              onSearchChange={props.handleSearchChange}
            />
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
