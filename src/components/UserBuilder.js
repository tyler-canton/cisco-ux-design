import React from "react";

import { Grid, Header, Icon, Input, List } from "semantic-ui-react";

export const UserBuilder = props => (
  <Grid className="grid-main">
    <Grid.Row verticalAlign="middle">
      <Grid.Column width={16}>
        <Header
          floated="right"
          as="h4"
          icon="plus square outline"
          content="Add User"
          className="blue-outline"
          onClick={props.addUser}
        />
      </Grid.Column>
    </Grid.Row>
    {props.users.map((user, i) => (
      <Grid.Row verticalAlign="middle">
        <Grid.Column width={15}>
          <List divided relaxed>
            <List.Item>
              <List.Icon name="user" size="large" verticalAlign="middle" />
              <List.Content>
                <Input
                  label={{
                    basic: true,
                    content: (
                      <Icon
                        name="trash"
                        color="red"
                        onClick={() => props.deleteUser(i)}
                      />
                    )
                  }}
                  labelPosition="right"
                  placeholder="Users"
                />
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
);
