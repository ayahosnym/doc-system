import React from "react";
import { Layout} from "antd";
import AddPatient from './../AddPatient/AddPatient'
import DisplayInfo from './../DisplayInfo/DisplayInfo'
import "./MergeDisplayAndAdd.less";


export default function MergeDisplayAndAdd() {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Header className='header'>
          <div className="brand-name" />
          Doctors_System
        </Header>
        {/* body */}
        <Content className="site-layout">
          <div className="site-layout-background">
            <AddPatient/>
            <DisplayInfo/>
          </div>
        </Content>
        <Footer className='text-center'>coding By Aya Hosny</Footer>
      </Layout>
    </div>
  );
}
