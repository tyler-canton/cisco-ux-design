import React from "react";
import { Grid, Header, Icon, Segment } from "semantic-ui-react";
export const NoReposMessage = () => (
  <Grid.Row className="no-repos">
    <Grid.Column verticalAlign="middle" width={16}>
      <Header textAlign="center" icon>
        <Icon name="server" />
        No Repositiories Listed
      </Header>
    </Grid.Column>
  </Grid.Row>
);
