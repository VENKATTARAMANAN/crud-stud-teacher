import React, { useEffect, useState } from "react";
import Mainpage from "../Base/Mainpage";
import axios from "axios";
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

const Teacher = () => {
  const navigate=useNavigate();
  const [teacherdata,setTeacherData]=useState([]);
  const getData=async()=>{
    try {
      const {data}= await axios.get("https://64c60982c853c26efadb0c22.mockapi.io/teachersData");
     setTeacherData(data);

    } catch (error) {
      console.log(error);
    }
  }
  const deletedata=async(id)=>{
try {
  const response=await axios.delete(`https://64c60982c853c26efadb0c22.mockapi.io/teachersData/${id}`);
  getData();
} catch (error) {

}
  }

  useEffect(()=>{
getData();
  },[])
  return (
    <div>
      <Mainpage>
        <div className="header">
          <h1>Teachers Record</h1>
          <br />
          <Button
            onClick={() => navigate("/createteacher")}
            variant="contained"
          >
            Create Teachers
          </Button>
        </div>
        <br />
        <div className="stud-table">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Qualification</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Dob</TableCell>
                  <TableCell>Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teacherdata.map((data, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{data.name}</TableCell>
                    <TableCell component="th" scope="row">
                      {data.qualification}
                    </TableCell>
                    <TableCell>{data.medium}</TableCell>
                    <TableCell>{data.age}</TableCell>
                    <TableCell>{data.dob}</TableCell>
                    <TableCell className="buton">
                      <Button
                        variant="contained"
                        onClick={() => navigate(`/editteacher/${data.id}`)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        onClick={() => deletedata(data.id)}
                        variant="contained"
                      >
                        Delete
                      </Button>{" "}
                      <Button
                        onClick={() => navigate(`/viewteacherdata/${data.id}`)}
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

export default Teacher;
