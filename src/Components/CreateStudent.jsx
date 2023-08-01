import React, { useState } from "react";
import Mainpage from "../Base/Mainpage";
import studData from "./StudentData";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateStudent = ({ studentdata, setStudentData }) => {
  const navigate = useNavigate();

  const [addStud, setAddStud] = useState({
    name: "",
    std: "",
    medium: "",
    age: "",
    dob: "",
    location: "",
  });

  const addData = () => {
    setStudentData([...studentdata, addStud]);
    navigate('/student')
  };

  console.log("addStud::: ", addStud);

  return (
    <div>
      <Mainpage>
        <div className="input">
          <TextField
            label="Name"
            className="in-field"
            onChange={(e) => setAddStud({ ...addStud, name: e.target.value })}
          ></TextField>
          <TextField
            label="Std"
            className="in-field"
            onChange={(e) => setAddStud({ ...addStud, std: e.target.value })}
          ></TextField>
          <TextField
            label="Medium"
            className="in-field"
            onChange={(e) => setAddStud({ ...addStud, medium: e.target.value })}
          ></TextField>
          <TextField
            label="Age"
            className="in-field"
            onChange={(e) => setAddStud({ ...addStud, age: e.target.value })}
          ></TextField>
          <TextField
            label=""
            type={"date"}
            className="in-field"
            onChange={(e) => setAddStud({ ...addStud, dob: e.target.value })}
          ></TextField>
          <TextField
            label="Location"
            className="in-field"
            onChange={(e) =>
              setAddStud({ ...addStud, location: e.target.value })
            }
          ></TextField>
        </div>
        <br />
        <Button variant="contained" onClick={addData}>
          Add Student
        </Button>
      </Mainpage>
    </div>
  );
};

export default CreateStudent;
