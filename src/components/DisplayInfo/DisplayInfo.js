import React, { useState, useEffect } from "react";
import { Table , Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./DisplayInfo.less";

function DisplayInfo() {
  const [data, setData] = useState([]);
  //this is the url for patients info  here i use it to get data to display it
  const URL = "http://localhost:3000/patients";
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  });

  function handleDeletePatient(e, id) {
    e.target.parentNode.remove();
    axios.delete("http://localhost:3000/patients/" + id).then((res) => {
      console.log(res.data);
    });
  }
  ///

  const history = useHistory();

  function handleUpdateInfo(id) {
    let path = "/update/" + id;
    history.push(path);
  }
  const displayInfo = data.map((patient) => {
    return (
      <tr key={patient.id}>
        <td>{patient.id}</td>
        <td>{patient.name}</td>
        <td>{patient.age}</td>
        <td>{patient.gender}</td>
        <td>
          <Button  className='delete' variant="outline-danger" onClick={(e) => handleDeletePatient(e, patient.id)}>Delete</Button>{' '}
        </td>
        <td>
          <Button className='update'  variant='outline-dark' onClick={() => handleUpdateInfo(patient.id)}>Update</Button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Table   striped bordered hover >
        <thead >
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>{displayInfo}</tbody>
      </Table>
    </div>
  );
}

export default DisplayInfo;
