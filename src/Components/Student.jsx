import React, { useState } from "react";
import Mainpage from "../Base/Mainpage";
import {
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Student = ({ studentdata, setStudentData }) => {
  const navigate = useNavigate();

  const deletedata = (idx) => {
    studentdata.splice(idx, 1);
    setStudentData([...studentdata]);
  };

  return (
    <div>
      <Mainpage>
        <div className="header">
          <h1>Students Record</h1>
          <br />
          <Button
            onClick={() => navigate("/createstudent")}
            variant="contained"
          >
            Create Student
          </Button>
        </div>
        <br />
        <div className="stud-table">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Std</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Dob</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentdata.map((data, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{data.name}</TableCell>
                    <TableCell component="th" scope="row">
                      {data.std}
                    </TableCell>
                    <TableCell>{data.medium}</TableCell>
                    <TableCell>{data.age}</TableCell>
                    <TableCell>{data.dob}</TableCell>
                    <TableCell>{data.location}</TableCell>
                    <TableCell className="buton">
                      <Button
                        variant="contained"
                        onClick={() => navigate(`/editstudent/${idx}`)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        onClick={() => deletedata(idx)}
                        variant="contained"
                      >
                        Delete
                      </Button>{" "}
                      <Button
                        onClick={() => navigate(`/viewstudent/${idx}`)}
                        variant="contained"
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Mainpage>
    </div>
  );
};

export default Student;
