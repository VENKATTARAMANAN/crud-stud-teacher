import React, { useState } from 'react'
import Mainpage from '../Base/Mainpage'
import { TextField,Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const EditTeacher = () => {
const [editteacher,seteditTeacher]=useState({});

    const {id}=useParams();
    const navigate=useNavigate();
    const [name, setName] = useState("");
    const [qualification, setQualification] = useState("");
    const [medium, setMedium] = useState("");
    const [age, setAge] = useState("");
    const [dob, setDob] = useState("");

    const getTeacher=async()=>{
        try {
            const response=await axios.get(`https://64c60982c853c26efadb0c22.mockapi.io/teachersData/${id}`)
            seteditTeacher(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const editTeacher=async()=>{
        const updateTeacher={
            name:name,
            qualification:qualification,
            medium:medium,
            age:age,
            dob:dob
        }
        try {
            const response= await axios.put(`https://64c60982c853c26efadb0c22.mockapi.io/teachersData/${id}`,updateTeacher)
            navigate('/teacher')
        } catch (error) {
            console.log(error);
        }
    }
const val=editteacher;
    useEffect(() => {
        setName(val.name);
        setQualification(editteacher.qualification);
        setMedium(editteacher.medium);
        setAge(editteacher.age);
        setDob(editteacher.dob);
        getTeacher();
      }, []);

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
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
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
        </div>
        <br />
        <Button variant="contained" 
        onClick={editTeacher}
        >
          Edit Teacher
        </Button>
      </Mainpage>
    </div>
  )
}

export default EditTeacher
