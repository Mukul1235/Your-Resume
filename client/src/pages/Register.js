import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const onfinish = async (values) => {
        setloading(true);
        try {
        const user = await axios.post("api/user/register", values);
          setloading(false);
                localStorage.setItem(
                  "resumebuilder-user",
                  JSON.stringify(user.data)
                );
          message.success("Registrations successfully ");
        } catch (err) {
      setloading(false);
          message.error("Registration failed");
        
    }
  };
    useEffect (() => {
      if (localStorage.getItem("resumebuilder-user")) {
        navigate("/home");
      }
    });
  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <h1 className="brand">Resume Mater</h1>

      <Form layout="vertical" onFinish={onfinish}>
        <h1>Register</h1>
        <hr></hr>
        <Form.Item name="username" label="username">
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password">
          <Input />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between ">
          <Link to="/login">Click here to Login</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
