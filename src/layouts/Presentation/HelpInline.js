import React, { Fragment } from "react";
import { Form, Icon, Popup, Header, Select } from "semantic-ui-react";
import { Aux } from "../../hocs/Aux";

export const HelpInline = props => (
  <Form.Field>
    <label for={props.labelFor}>
      <Popup
        trigger={
          <Header as="h5">
            <Header.Content>{props.labelContent}</Header.Content>
            <Icon.Group size="large">
              <Icon corner="top right" name={props.iconName} />
            </Icon.Group>
          </Header>
        }
        content={props.popupContent}
        verticalOffset={5}
        horizontalOffset={-150}
      />
    </label>
    {props.control === Select ? (
      <Select
        options={props.options}
        placeholder={props.placeholder}
        search
        searchInput={props.labelFor}
      />
    ) : null}
  </Form.Field>
);
