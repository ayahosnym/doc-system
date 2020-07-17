import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function GetForm(props) {
  const { register, handleSubmit, errors, reset } = useForm();
  const { URL, axiosMethode, patientId } = props;
  const history = useHistory();

  const onSubmit = (data) => {
    if (data) {
      if (axiosMethode === "post") axios.post(URL, data);
      reset({});
    }
    if (axiosMethode === "patch") {
      axios.patch(URL + patientId, data);
      history.push("/");
    }
  };

  const validateName = (value) => {
    if (typeof value !== "string") return false;
    return true;
  };
  const validateAge = (value) => {
    if (value > 120 || value < 1) return false;
    else return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/*  */}
          <div className="col-12 mb-3">
            <input
              type="text"
              name="name"
              placeholder="name"
              ref={register({
                required: true,
                minLength: 6,
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
          <div className="col-12 mb-3">
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
            />
            <span className='mr-3'>
            :Male

            </span>
            <input
              type="radio"
              name="gender"
              value="female"
              ref={register({ required: true })}
            />
            <span>
            :Female
            </span>
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
            Save{" "}
          </Button>
        </div>
      </div>
    </form>
  );
}
