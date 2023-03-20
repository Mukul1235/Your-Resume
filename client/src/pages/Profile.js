import Layout from "../components/Layout";
import React, { useState } from "react";
import { Button, Form, message, Spin, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExprienceProjects from "../components/ExperienceProjects";
import axios from "axios";

const Profile = () => {
  const [loading, setloading] = useState(false);
  const user = JSON.parse(localStorage.getItem("resumebuilder-user"));
  const onFinish = async (values) => {
    setloading(true);

    console.log(user._id);
    try {
      const user1 = await axios.post("api/user/update", {
        ...values,
        _id: user._id,
      });
      // console.log(user1.data)
      // if (user1) {
      //   localStorage.removeItem("resumebuilder-user");
        localStorage.setItem("resumebuilder-user", JSON.stringify(user1.data));
      // }
      setloading(false);
      message.success("Profile Updated successfully ");
    } catch (err) {
      setloading(false);
      message.error("Profile Update failed");
    }
  };
  return (
    <Layout>
      {loading && <Spin size="Large" />}
      <div className="update-profile">
        <h4 >
          <b>Update Profile</b>
        </h4>
        <hr />
        <Form layout="vertical " onFinish={onFinish} initialValues={user}>
          <Tabs>
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Projects" key="3">
              <ExprienceProjects />
            </TabPane>
          </Tabs>
          <Button htmlType="submit">UPDATE</Button>
        </Form>
      </div>
    </Layout>
  );
};

export default Profile;
