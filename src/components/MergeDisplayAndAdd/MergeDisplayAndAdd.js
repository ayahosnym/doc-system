import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import AddPatient from './../AddPatient/AddPatient'
import DisplayInfo from './../DisplayInfo/DisplayInfo'
import "./MergeDisplayAndAdd.less";


export default function MergeDisplayAndAdd() {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Header className='header'>
          <div className="logo" />
          Doctors_System
        </Header>
        {/* body */}
        <Content className="site-layout">
          <div className="site-layout-background">
            <AddPatient/>
            <DisplayInfo/>
          </div>
        </Content>

        <Footer className='text-center'>codingBy Aya Hosny</Footer>
      </Layout>
    </div>
  );
}
