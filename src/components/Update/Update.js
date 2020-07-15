import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import { Alert, Button } from "react-bootstrap";
import "./Update.less";

function Update(props) {
  const { Content } = Layout;
  const URL = "http://localhost:3000/patients/";

  //this to make redirect to the main page after edit info
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  //  handelsubmit and send the new info to database
  // get the patient id from url
  const id = props.match.params.id;
  const onSubmit = (data) => {
    if (data) {
      axios.patch(URL + id, data);
    }
    history.push("/");
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
    <div>
      <Layout>
        <Content className="site-layout">
          <h5 className="text-center update-title"> Update Patient Info</h5>
          <div className="site-layout-background">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="container">
                <div className="row text-center justify-content-center">
                  {/*  */}
                  <div className="col-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
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
                    Save{" "}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Update;
