import { Button, Dropdown } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/Layout.css";
import { UserOutlined } from "@ant-design/icons";

const Layout = (props) => {
  const user = JSON.parse(localStorage.getItem("resumebuilder-user"));
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="/home">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/profile">Profile</Link>,
    },
    {
      key: "3",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("resumebuilder-user");
            navigate("/login");
          }}>
          Logout
        </span>
      ),
    },
  ];
  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          CV
        </h1>
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{ overflow: "scroll" }}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
