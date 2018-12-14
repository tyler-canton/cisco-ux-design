import React from "react";
import {
  Form,
  Grid,
  Header,
  Icon,
  Input,
  List,
  Select
} from "semantic-ui-react";

import { options } from "../constants";

const Sform = () => (
  <Form.Select fluid options={options} placeholder="Server One" />
);

const Iform = () => <Form.Select fluid placeholder="Server Two" />;

export const VirtualBuilder = props => (
  <Grid className="grid-main">
    <Grid.Row verticalAlign="middle">
      <Grid.Column width={16}>
        <Header
          floated="right"
          as="h4"
          icon="plus square outline"
          content="Add Virtual Group"
          className="blue-outline"
          onClick={props.added}
        />
      </Grid.Column>
    </Grid.Row>
    {props.repos.map((repo, i) => {
      return repo.vControls.map(control => (
        <Grid.Row key={i} verticalAlign="middle">
          <Grid.Column width={props.config ? 14 : 15}>
            <List divided relaxed>
              <List.Item>
                <List.Icon name="server" size="large" verticalAlign="middle" />
                <List.Content>
                  <Form.Group widths="equal">
                    <Form.Field
                      control={Input}
                      placeholder={control.inputValue}
                    />
                    <Form.Field
                      control={Select}
                      options={options}
                      placeholder={control.selectValue}
                    />
                  </Form.Group>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon
              name="trash alernate"
              color={"red"}
              onClick={() => props.deleted(i)}
            />
          </Grid.Column>

          <Grid.Column width={1}>
            <Icon
              name="setting"
              color={"gray"}
              onClick={() => props.openModal("inverted", "virtual")}
            />
          </Grid.Column>
        </Grid.Row>
      ));
    })}
  </Grid>
);
