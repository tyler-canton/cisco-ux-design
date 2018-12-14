import React from "react";

import {
  Dropdown,
  Grid,
  Header,
  Icon,
  Input,
  List,
  Message,
  Select,
  Divider
} from "semantic-ui-react";

import { options } from "../constants";

const opts = [
  { key: "af", value: "af", text: "Whitelisted" },
  { key: "af", value: "af", text: "Authenticated" },
  { key: "af", value: "af", text: "Anynonmous" }
];
export const ArtxBuilder = props => (
  <Grid className="grid-main">
    <Grid.Row verticalAlign="middle">
      <Grid.Column floated="right">
        <Header
          floated="right"
          as="h4"
          icon="plus square outline"
          content="Import List"
          className="blue-outline"
          onClick={() => props.openModal("inverted", "import")}
        />

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
    <Grid.Row verticalAlign="middle">
      <Grid.Column width={8}>
        <Message attached header="External Repositories" />
        <Dropdown
          fluid
          multiple
          onChange={props.handleChange}
          onSearchChange={props.handleSearchChange}
          options={options}
          placeholder="Add Repo"
          search
          searchQuery={props.searchQuery}
          selection
          value={props.artx.accesslevel}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <List>
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
                      onClick={() => props.deleteUser()}
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
      <Grid.Column textAlign="right" width={4}>
        <Select placeholder="Access Level" options={opts} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
