import React from "react";
import {
  Dropdown,
  Modal,
  Button,
  Form,
  Icon,
  Grid,
  TextArea,
  Message
} from "semantic-ui-react";
import { repos } from "../../constants";
export const ModalImport = props => (
  <Modal
    id="history-modal"
    dimmer={props.dimmer}
    open={props.open}
    onClose={props.close}>
    <Modal.Header textAlign="center">Import Multiple Users</Modal.Header>
    <Modal.Content id={"virtual-repo-config-content"}>
      <Grid stackable>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={16}>
            <Message attached icon>
              <Icon name="users" />
              <Message.Header as="h4">
                Paste a comma- or whitespace- separated list of external users
                below:
              </Message.Header>
            </Message>
            <Form>
              <TextArea autoHeight rows={2} />
            </Form>
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
