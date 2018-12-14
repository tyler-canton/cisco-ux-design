import React from "react";
import { Menu, Segment, Image } from "semantic-ui-react";

const logo = "../assets/images/am-logo-off-white.png";

export default class Toolbar extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;
    return (
      <Segment id="toolbar-menu" className="toolbar-menu-secondary ">
        <Menu borderless secondary>
          <Menu.Item fitted="vertically">
            <Image size="medium" src={logo} />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item icon="setting" />
            <Menu.Item icon="sign-out" />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}
