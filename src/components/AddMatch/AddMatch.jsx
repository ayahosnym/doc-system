import React from "react";
import GetForm from "../Helpers/Form/form";
import "./AddMatch.less";

export default function AddMatch() {
  
  const URL = "/matches";
  return (
    <div className="mb-5">
      <GetForm URL={URL} axiosMethode="post" />
    </div>
  );
}


