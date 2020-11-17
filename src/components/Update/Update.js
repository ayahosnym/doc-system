import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import GetForm from "./../Helpers/Form/form";
import "./Update.less";


export default function Update(props) {
  const [matches, setMatches] = useState([]);
  const { Content, Header } = Layout;
  const URL = "/matches/";

  // here i get id for match  from url  to update it in database based on its ID
  const id = props.match.params.id;
  useEffect(() => {
    Axios.get(URL)
      .then((response) => {
        setMatches(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // function getMatch(){
  //   const fillter = matches.filter((match,id) =>{
  //     return match.id ==
  //   })
  // }

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
        <h4 className="text-center update-title my-5 "> Update Match Info</h4>
        <div className="content">
          <GetForm
            URL={URL}
            axiosMethode="patch"
            matchId={id}
            value={matches}
          />
        </div>
      </Content>
    </Layout>
  );
}
