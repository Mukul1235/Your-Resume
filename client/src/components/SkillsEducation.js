import { Button, Form, Input, Space } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../resources/Layout.css";

const SkillsEducation = () => {
  return (
    <div>
      <h5>Education</h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "qualification"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "Percentage"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Percentage" />
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "Institution"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Institution" />
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5>Skills</h5>
      <hr />
      <Form.List name="skill">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "Technology"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Technology" />
                    </Form.Item>
                  </div>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}>
                      <Input placeholder="Rating" />
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
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default SkillsEducation;
