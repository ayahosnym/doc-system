import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './DisplayInfo.less';

function DisplayInfo () {

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
        <td>{patient.name}</td>
        <td>{patient.age}</td>
        <td>{patient.gender}</td>
        <td>
          <button onClick={(e) => handleDeletePatient(e, patient.id)}>
            Delete
          </button>
        </td>
        <td>
          <button onClick={() => handleUpdateInfo(patient.id)}>Update</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>age</th>
          <th>gender</th>
        </tr>
        {displayInfo}
      </table>
    </div>
  );
}


export default DisplayInfo;