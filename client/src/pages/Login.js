import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import "../resources/authentication.css";
import {  Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const onfinish = async (values) => {
    setloading(true);
    try {
      console.log(values)
      const user = await axios.post("api/user/login", values);
      setloading(false);
      localStorage.setItem('resumebuilder-user', JSON.stringify(user.data))
    navigate('/home')
    } catch (err) {
      setloading(false);
      message.error("Login failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem('resumebuilder-user')) {
      navigate('/home')
    }
  })
  return (

    <div className="auth-parent">
      {loading && (<Spin size="large" />)}
      <h1 className="brand">Resume Mater</h1>
      <Form layout="vertical" onFinish={onfinish}>
        <h1>Login</h1>
        <hr></hr>
        <Form.Item name="username" label="username">
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between ">
          <Link to="/register">Click here to register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
