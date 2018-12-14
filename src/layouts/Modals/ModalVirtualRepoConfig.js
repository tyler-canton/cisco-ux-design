
import React from "react";
import {
  Dropdown,
  Modal,
  Button,
  Segment,
  Grid,
  Message
} from "semantic-ui-react";
import { options } from "../../constants";
export const ModalVirtualRepoConfig = props => (
  <Modal dimmer={props.dimmer} open={props.open} onClose={props.close}>
    <Modal.Header>Virtual Repository Configuration</Modal.Header>
    <Modal.Content id={"virtual-repo-config-content"}>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Message attached header="Hosted Repositories" />
              <Dropdown
                fluid
                multiple
                placeholder="Add Hosted Repo To Configuraion"
                onChange={props.handleChange}
                onSearchChange={props.handleSearchChange}
                options={options}
                search
                searchQuery={props.searchQuery}
                selection
                value={props.value}
              />
            </Grid.Column>

            <Grid.Column>
              <Message attached header="Remote Repositories" />
              <Dropdown
                fluid
                multiple
                placeholder="Add Remote Repo To Configuraion"
                onSearchChange={props.handleSearchChange}
                options={options}
                search
                searchQuery={props.searchQuery}
                selection
                value={props.value}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
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
