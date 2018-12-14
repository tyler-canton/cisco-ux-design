import React from "react";
import {
  Dropdown,
  Modal,
  Button,
  Header,
  Grid,
  List,
  Message
} from "semantic-ui-react";
import { repos } from "../../constants";
export const ModalHistory = props => (
  <Modal
    id="import-modal"
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
                <TextArea
                  autoHeight
                  placeholder="  Paste a comma- or whitespace- separated list of external users below:"
                  rows={2}
                />
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
