import React from "react";
import "../../resources/templates.css";
const Template2 = () => {
  const user = JSON.parse(localStorage.getItem("resumebuilder-user"));

  return (
    <div className="template1-parent">
      <div className="top d-flex  flex-column">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email} </p>
          <p>{user.Address} </p>
          <p>{user.MobileNumber} </p>
        </div>
      </div>
      <div className="divider mt-2"></div>
      <div className="divider mt-1"></div>
      <div className="objective mt-2">
        <h3 style={{ background: "gray" ,padding:4}}>Objective</h3>
        <hr />
        <p>{user.carrierObjective}</p>
      </div>
      <div className="divider mt-2"></div>

      {user.education.length !== 0 ? (
        <div className="experience mt-2">
        <h3 style={{ background: "gray" ,padding:4}}>Education</h3>
          <hr />
          {user.education.map((education) => {
            return (
              <div className="d-flex align-items-center ">
                <h6 style={{ width: 120 }}>
                  <b>{education.Range} : </b>
                </h6>
                <p>
                  <b>{education.qualification}</b> with{" "}
                  <b>{education.Percentage}</b> in {education.Institution}
                </p>
              </div>
            );
          })}
          <div className="divider mt-2"></div>
        </div>
      ) : (
        <></>
      )}

      {user.experience.length !== 0 ? (
        <div className="experience mt-2">
        <h3 style={{ background: "gray" ,padding:4}}>Experience</h3>
          <hr />
          {user.experience.map((experience) => {
            return (
              <div className="d-flex align-items-center ">
                <h6 style={{ width: 120 }}>
                  <b>{experience.Range} : </b>
                </h6>
                <p>
                  <b>{experience.company}</b> in {experience.place}
                </p>
              </div>
            );
          })}
          <div className="divider mt-2"></div>
        </div>
      ) : (
        <></>
      )}
      {user.projects.length !== 0 ? (
        <div className="experience mt-2">
        <h3 style={{ background: "gray" ,padding:4}}>Projects</h3>
          <hr />
          {user.projects.map((projects) => {
            return (
              <div className="d-flex  flex-column">
                <br></br>
                <h6>
                  {projects.title} [{projects.Range}]:{" "}
                </h6>
                <p>
                  <b>{projects.rating}</b>
                </p>
              </div>
            );
          })}
          <div className="divider mt-2"></div>
        </div>
      ) : (
        <></>
      )}
      {user.skill.length !== 0 ? (
        <div className="experience mt-2">
        <h3 style={{ background: "gray" ,padding:4}}>Skills</h3>
          <hr />
          {user.skill.map((skill) => {
            return <p>{skill.Technology}</p>;
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Template2;
