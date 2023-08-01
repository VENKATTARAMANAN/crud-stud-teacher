import React, { useState } from 'react'
import Mainpage from '../Base/Mainpage'
import { TextField,Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateTeacher = () => {
    const navigate=useNavigate();
    const [addteacher,setAddTeacher]=useState({
name:"",
qualification:"",
medium:"",
age:"",
dob:"",
    })

    const addData=async()=>{
        try {
            const response=await axios.post("https://64c60982c853c26efadb0c22.mockapi.io/teachersData",addteacher);

            navigate('/teacher')
        } catch (error) {
            console.log(error);
        }
    }
   
  return (
    <div>
      <Mainpage>
      <div className="input">
          <TextField
            label="Name"
            className="in-field"
            onChange={(e) => setAddTeacher({ ...addteacher, name: e.target.value })}
          ></TextField>
          <TextField
            label="Qualification"
            className="in-field"
            onChange={(e) => setAddTeacher({ ...addteacher, qualification: e.target.value })}
          ></TextField>
          <TextField
            label="Medium"
            className="in-field"
            onChange={(e) => setAddTeacher({ ...addteacher, medium: e.target.value })}
          ></TextField>
          <TextField
            label="Age"
            className="in-field"
            onChange={(e) => setAddTeacher({ ...addteacher, age: e.target.value })}
          ></TextField>
          <TextField
            label=""
            type={"date"}
            className="in-field"
            onChange={(e) => setAddTeacher({ ...addteacher, dob: e.target.value })}
          ></TextField>
        </div>
        <br />
        <Button variant="contained"
         onClick={addData}
         >
          Add Student
        </Button>
      </Mainpage>
    </div>
  )
}

export default CreateTeacher
