import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./DisplayInfo.less";

export default function DisplayInfo() {
  const [matches, setMatches] = useState([]);
  //fetch All Matches to display them
  useEffect(() => {
    Axios.get('/matches')
      .then((response) => {
        setMatches(response.data);
      })
      .catch((err) => console.log(err));
  },[matches]);
  // delete match
  function handleDeleteMatch(e, id) {
    e.target.parentNode.remove();
    Axios.delete("/matches/" + id).then((res) => {
      console.log(res.data);
    });
  }
  // update match info
  const history = useHistory();
  function handleUpdateInfo(id) {
    history.push("/update/" + id);
  } 
  // display matchinfo  in a table
  const match = matches.map((match) => {
    return (
      <tr key={match.id}>
        <td>{match.id}</td>
        <td>{match.homeTeam}</td>
        <td>{match.homeTeamScore}</td>
        <td>{match.awayTeam}</td>
        <td>{match.awayTeamScore}</td>
        <td>{match.startTime}</td>
        <td>{match.endTime}</td>
        <td>{match.league}</td>
        <td>{match.duration}</td>
        <td>{match.isActive}</td>
        <td>
          <Button
            className="delete"
            variant="outline-danger"
            onClick={(e) => handleDeleteMatch(e,match.id)}
          >
            Delete
          </Button>{" "}
        </td>
        <td>
          <Button
            className="update"
            variant="outline-dark"
            onClick={() => handleUpdateInfo(match.id)}
          >
            Update
          </Button>
        </td>
      </tr>
    );
  });
  const tableHeader = () => {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Home Team</th>
          <th>Home Team Score</th>
          <th>Away Team</th>
          <th>Away Team Score</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>League</th>
          <th>Duration</th>
          <th>Is Active</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
    );
  };
  return (
    <div>
      <Table striped bordered hover>
        {tableHeader()}
        <tbody>{match}</tbody>
      </Table>
    </div>
  );
}

