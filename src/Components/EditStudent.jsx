import React, { useEffect, useState } from "react";
import Mainpage from "../Base/Mainpage";
import { Button, TextField } from "@mui/material";
import studData from "./StudentData";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = ({ studentdata, setStudentData }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [std, setStd] = useState("");
  const [medium, setMedium] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  var editdata = studentdata[id];
 
  useEffect(() => {
    setName(editdata.name);
    setStd(editdata.std);
    setMedium(editdata.medium);
    setAge(editdata.age);
    setDob(editdata.dob);
    setLocation(editdata.location);
  }, []);

  const editStudent = () => {
    const updatedStudent = {
      name: name,
      std: std,
      medium: medium,
      age: age,
      dob: dob,
      location: location,
    };
    studentdata[id] = updatedStudent;
    setStudentData([...studentdata]);
    navigate("/student");
  };

  return (
    <div>
      <Mainpage>
        <div className="input">
          <TextField
            label="Name"
            className="in-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            label="Class"
            className="in-field"
            value={std}
            onChange={(e) => setStd(e.target.value)}
          ></TextField>
          <TextField
            label="Medium"
            className="in-field"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          ></TextField>
          <TextField
            label="Age"
            className="in-field"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></TextField>
          <TextField
            label=""
            type={"date"}
            className="in-field"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          ></TextField>
          <TextField
            label="Location"
            className="in-field"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></TextField>
        </div>
        <br />
        <Button variant="contained" onClick={editStudent}>
          Edit Student
        </Button>
      </Mainpage>
    </div>
  );
};

export default EditStudent;
