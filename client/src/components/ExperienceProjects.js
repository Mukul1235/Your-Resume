import { Button, Form, Input, Space } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../resources/Layout.css";
import TextArea from "antd/es/input/TextArea";

const ExprienceProjects = () => {
  return (
    <div>
      <h5>Experience</h5>
      <hr />
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "company"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Company" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "years"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Years" />
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "place"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Place" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "Range"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Year Range" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}>
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5>Projects</h5>
      <hr />
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Title" />
                    </Form.Item>
                  </div>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <TextArea placeholder="Description" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "Range"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Year Range" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}>
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default ExprienceProjects;
