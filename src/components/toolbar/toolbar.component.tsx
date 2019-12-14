import React from "react";
import { Link } from "react-router-dom";
import "./toolbar.component.styles.css";
import { Menu } from "antd";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/services"}>Services</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Toolbar;
