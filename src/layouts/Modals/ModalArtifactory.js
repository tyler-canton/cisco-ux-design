import React from "react";
import { Modal, Button, Header, Grid, Tab, Segment } from "semantic-ui-react";
import { templateTab } from "../../constants";

export const ModalArtifactory = props => (
  <Modal
    id="artifactory-modal"
    dimmer={props.dimmer}
    open={props.open}
    onClose={props.close}
    size="large">
    <Modal.Header textAlign="center">Artifactory Template </Modal.Header>
    <Modal.Content id={"virtual-repo-config-content"}>
      <Grid stackable>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={16}>
            <Tab
              className="tabs"
              menu={{
                borderless: true,
                attached: false,
                tabular: false
              }}
              panes={templateTab}
              grid={{ tabwidth: 10 }}
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
