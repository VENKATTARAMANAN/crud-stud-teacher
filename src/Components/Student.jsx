import React, { useState } from "react";
import Mainpage from "../Base/Mainpage";
import { Button } from "@mui/material";
import axios from "axios";

const Student = () => {
  const studentsData = [
    {
      name: "venkat",
      class: "5",
      medium: "tamil",
      age: 5,
      dob: "2023-06-08",
      location: "Bangalore",
    },
    {
      name: "arun",
      class: "5",
      medium: "english",
      age: 5,
      dob: "2023-06-08",
      location: "Bangalore",
    },
    {
      name: "naban",
      class: "5",
      medium: "tamil",
      age: 5,
      dob: "2023-06-08",
      location: "Bangalore",
    },
  ];
  return (
    <div>
      <Mainpage>
        <div className="mainpage">
          <div className="header">
            <h1>Students Record</h1>
            <br />
            <Button variant="contained">Create Student</Button>
           
          </div>
        </div>
      </Mainpage>
    </div>
  );
};

export default Student;
