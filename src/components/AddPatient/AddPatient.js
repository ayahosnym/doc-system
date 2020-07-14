import React from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Input, InputNumber, Radio } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import "./AddPatient.less";

function AddPatient() {
  //this is the url for patients info  here i use it to save after doctors click submit in form
  const URL = "http://localhost:3000/patients";

  // function form to get data
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (data) {
      axios.post(URL, data);
      console.log(data);
    }
  };

  const validateName = (value) => {
    if (typeof value !== "string") return false;
    return true;
  };
  const validateAge = (value) => {
    if (value > 120 || value < 1) return false;
    return true;
  };
  //

  return (
    <div id="add-patients-info">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={register({
            required: true,
            minLength: 5,
            validate: validateName,
          })}
        />
        <div>{errors.name && <p>Not Vaild name</p>}</div>
        <input
          type="number"
          name="age"
          placeholder="age"
          ref={register({ required: true, validate: validateAge })}
        />
        <div>{errors.age && <p>Not Vaild</p>}</div>
        <input
          type="radio"
          name="gender"
          value="male"
          ref={register({ required: true })}
        />
        :Male
        <input
          type="radio"
          name="gender"
          value="female"
          ref={register({ required: true })}
        />
        :Femal
        <div>{errors.gender && <p>please choose gender</p>}</div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddPatient;
