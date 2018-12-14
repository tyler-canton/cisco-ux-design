import React from 'react';
import { Form, Grid, Header, Icon, Input, List, Select } from "semantic-ui-react";

import { options } from "../constants";
import { NoReposMessage } from '../layouts/Presentation/NoReposMessage';

export const HostedBuilder = props => (
  <Grid className="grid-main">
    {props.repos.length > 0 ? props.repos.map((repo, i) => {
      return repo.hControls.map(control => (
        <Grid.Row key={i} verticalAlign="middle">
          <Grid.Column width={15}>
            <List divided relaxed>
              <List.Item>
                <List.Icon name="server" size="large" verticalAlign="middle" />
                <List.Content>
                  <Form.Group widths="equal">
                    <Form.Field control={Input} placeholder={control.inputValue} />
                    <Form.Field control={Select} options={options} placeholder={control.selectValue} />
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
        </Grid.Row>
      ))
    }) : <NoReposMessage />
    }
  </Grid>
);
