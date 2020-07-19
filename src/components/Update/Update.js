import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import GetForm from "./../Helpers/Form/form";
import "./Update.less";

function Update(props) {
  const { Content, Header } = Layout;
  const URL = "http://localhost:3000/patients/";

  // here i get the patient id from url  to update the data in database based on this id

  const id = props.match.params.id;

  return (
    <Layout>
      <Header className="header">
        <ul className="list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Header>
      <Content className="site-layout ">
        <h4 className="text-center update-title my-5 "> Update Patient Info</h4>
        <div className="content">
          <GetForm URL={URL} axiosMethode="patch" patientId={id} />
        </div>
      </Content>
    </Layout>
  );
}

export default Update;
