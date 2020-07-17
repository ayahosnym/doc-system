import React from "react";
import { Layout } from "antd";
import GetForm from './../Helpers/form'
import "./Update.less";

function Update(props) {
  const { Content } = Layout;
  const URL = "http://localhost:3000/patients/";
  const id = props.match.params.id; 

  return (
    <div>
      <Layout>
        <Content className="site-layout">
          <h5 className="text-center update-title"> Update Patient Info</h5>
          <div className="site-layout-background">
          <GetForm URL={URL} axiosMethode='patch' patientId ={id} />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Update;
