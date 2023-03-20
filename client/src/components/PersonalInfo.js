import { Form, Input } from "antd";
import React from "react";
import "../index.css";
const { TextArea } = Input;
const PersonalInfo = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Item
            name="firstName"
            label="FirstName"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="lastName"
            label="lastName"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="MobileNumber"
            label="Mobile Number"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="Portfolio"
            label="Portfolio"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name="carrierObjective"
            label="Carrier Objective"
            rules={[{ required: true }]}>
            <TextArea  />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name="Address"
            label="Address"
            rules={[{ required: true }]}>
            <TextArea  />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
