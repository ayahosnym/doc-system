import React from "react";
import "./AddPatient.less";
import GetForm from "./../Helpers/Form/form";

function AddPatient() {
  //this is the url for patients info --   here i use it to save patients data inside it after doctors click submit
  const URL = "http://localhost:3000/patients";
  return (
    <div className="add-patients-info mb-5">
      <GetForm URL={URL} axiosMethode="post" />
    </div>
  );
}

export default AddPatient;
