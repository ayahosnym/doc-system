import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Button } from "react-bootstrap";
import axios from "axios";
import "./AddPatient.less";
import GetForm from "./../Helpers/form";

function AddPatient() {
  //this is the url for patients info  here i use it to save after doctors click submit in form
  const URL = "http://localhost:3000/patients";

  // function form to get data
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    if (data) {
      axios.post(URL, data);
      console.log(data);
    }
    reset({});
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
    <div className="add-patients-info mb-5">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="container">
          <div className="row text-center justify-content-center">
            {/*  */}
            <div className="col-12">
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
              <div>
                {errors.name && (
                  <Alert className="alert-error" variant={"danger"}>
                    Not Vaild name!
                  </Alert>
                )}
              </div>
            </div>
            {/*  */}
            <div className="col-12">
              <input
                type="number"
                name="age"
                placeholder="age"
                ref={register({ required: true, validate: validateAge })}
              />
              <div>
                {errors.age && (
                  <Alert className="alert-error" variant={"danger"}>
                    Not Vaild age!
                  </Alert>
                )}
              </div>
            </div>
            {/*  */}
            <div className="col-12 mb-3">
              <input
                type="radio"
                name="gender"
                value="male"
                ref={register({ required: true })}
                className="p-5"
              />
              :Male
              <input
                type="radio"
                name="gender"
                value="female"
                ref={register({ required: true })}
              />
              :Female
              <div>
                {errors.gender && (
                  <Alert className="alert-error" variant={"danger"}>
                    Please Choose Patient Gender
                  </Alert>
                )}
              </div>
            </div>
            {/* // */}
            <Button type="submit" className="submit">
              ADD{" "}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
