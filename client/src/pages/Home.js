import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import TemplateImg1 from "../resources/Template1.png";
import "../resources/templates.css";
const Home = () => {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: TemplateImg1,
    }, {
      title: "Highlighted Sections Resume",
      image:TemplateImg1,
    }
  ];
  return (
    <Layout>
      <div className="row home">
        {templates.map((template,index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img src={template.image} height="400" style={{width:'100%'}}></img>
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={()=>navigate(`/template/${index+1}`)}>TRY</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
