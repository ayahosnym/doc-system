import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import moment from 'moment'
import "./form.less";

export default function GetForm({ URL, axiosMethode, matchId }) {
  const [allMatches, setallMatches] = useState([]);

  useEffect(() => {
    Axios.get("/matches").then((response) => {
      setallMatches(response.data);
    });
  }, []);

  const { register, handleSubmit, errors, reset } = useForm();
  const history = useHistory();
// TODO use moment to format Date and time
  const onSubmit = (data) => {
    if (data) {
      // post new data in database
      if (axiosMethode === "post") {
        Axios.post(URL, data);
        reset({});
      }
    }

    //when Updating data
    if (axiosMethode === "patch") {
      Axios.patch(URL + matchId, data);
      history.push("/");
    }
  };

  const validateName = (value) => {
    if (typeof value !== "string") return false;

    for (let match of allMatches) {
      if (match.name === value) return false;
    }

    return true;
  };
  const validDuration = (value) => {
    if (value < 90 || value > 120) return false;
    return true;
  };

  const validScore = (value) => {
    if (value < 0) return false;
    return true;
  };
  // const validDateTime = (value) => {
  //   return true;
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* home team */}
          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="text"
              name="homeTeam"
              placeholder="Home Team"
              ref={register({
                required: true,
                minLength: 7,
                validate: validateName,
              })}
            />
            <div>
              {errors.homeTeam && (
                <Alert className="alert-error" variant={"danger"}>
                  This is not Vaild name
                </Alert>
              )}
            </div>
          </div>
          {/* away team */}
          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="text"
              name="awayTeam"
              placeholder="Away Team"
              ref={register({
                required: true,
                minLength: 7,
                validate: validateName,
              })}
            />
            <div>
              {errors.awayTeam && (
                <Alert className="alert-error" variant={"danger"}>
                  This is not Vaild name!
                </Alert>
              )}
            </div>
          </div>
          {/* home team score */}
          <div className="col-sm-12 col-md-6">
            <input
              type="number"
              name="homeTeamScore"
              placeholder="Home Team Score"
              ref={register({ required: true, validate: validScore })}
            />
            <div>
              {errors.homeTeamScore && (
                <Alert className="alert-error" variant={"danger"}>
                  Please enter the correct Score!
                </Alert>
              )}
            </div>
          </div>
          {/*  away team score */}
          <div className="col-sm-12 col-md-6">
            <input
              type="number"
              name="awayTeamScore"
              placeholder="Away Team Score"
              ref={register({ required: true, validate: validScore })}
            />
            <div>
              {errors.awayTeamScore && (
                <Alert className="alert-error" variant={"danger"}>
                  Please enter the correct Score!
                </Alert>
              )}
            </div>
          </div>
          {/* duration */}
          <div className="col-sm-12 col-md-6 mb-3">
            <input
              type="number"
              name="duration"
              placeholder="duration"
              ref={register({ required: true, validate: validDuration })}
            />
            <div>
              {errors.duration && (
                <Alert className="alert-error" variant={"danger"}>
                  Not Vaild, Please try again!
                </Alert>
              )}
            </div>
          </div>
          {/* Start Time*/}
          <div className="col-sm-12 mb-3">
            <input
              type="datetime-local"
              name="startTime"
              ref={register({ required: true})}
            />
            <div>
              {errors.startTime && (
                <Alert className="alert-error" variant={"danger"}>
                  Please try again!
                </Alert>
              )}
            </div>
          </div>
          {/*End time*/}
          <div className="col-sm-12  mb-3">
            <input
              type="datetime-local"
              name="endTime"
              ref={register({ required: true })}
            />
            <div>
              {errors.endTime && (
                <Alert className="alert-error" variant={"danger"}>
                  Please try again!
                </Alert>
              )}
            </div>
          </div>
          {/*  League */}
          <div className="col-12 mb-3">
            <select
              name="league"
              id="league"
              ref={register({ required: true })}
            >
              <option>The Leauge</option>
              <option value="spanish">Spanish</option>
              <option value="premier">Premier</option>
              <option value="egyption">Egyption</option>
              <option value="German">German</option>
            </select>
            <div>
              {errors.league && (
                <Alert className="alert-error" variant={"danger"}>
                  which League?
                </Alert>
              )}
            </div>
          </div>

          {/* // active or not */}
          <div className="col-12 mb-3">
            <input
              type="radio"
              name="isActive"
              value="Yes"
              ref={register({ required: true })}
            />
            <span className="mr-3">:Active</span>
            <input
              type="radio"
              name="isActive"
              value="No"
              ref={register({ required: true })}
            />
            <span>: Inactive</span>
            <div>
              {errors.isActive && (
                <Alert className="alert-error" variant={"danger"}>
                  Is Match Active ?
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
