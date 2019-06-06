import React, { Component } from "react";
import { Image, Menu, Form, Input, Icon } from "semantic-ui-react";
import "./HeaderNav.scss";
import logo from "../../assets/images/logo.jpg";

class HeaderNav extends Component {
  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Image src={logo} size="tiny" />
        </Menu.Item>
        <Menu.Menu className="nav-container">
          {/* searchbar with semaintic Input element */}
          <Menu.Item className="search-input">
            <Form>
              <Form.Field>
                <Input placeholder="Search" size="small" action="go" />
              </Form.Field>
            </Form>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon className="header-icon" name="video camera" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="grid layout" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="chat" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="alarm" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Image src="http://via.placeholder.com/80x80" avatar />
            </Menu.Item>
          </Menu.Menu>
          {/* Menu.Menu is the child of Menu, Menu.Menu can have arbitary Menu.Menu inside it */}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderNav;