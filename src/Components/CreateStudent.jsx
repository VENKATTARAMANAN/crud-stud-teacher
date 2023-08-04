import React, { useState } from "react";
import Mainpage from "../Base/Mainpage";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export const fieldValidationSchema = yup.object({
  name: yup.string().required("Please fill in student name"),
  std: yup.number().lessThan(10, "Please fill the std below 10 std").required("Please fill this field"),
  medium: yup.string().required("Please select any one"),
  age: yup.number().max(16, "Please Enter the correct age").required("Please fill this field"),
  dob: yup.string().required("Please select the Correct the dob"),
  location: yup.string().required("Please fill the location"),
});

const CreateStudent = ({ studentdata, setStudentData }) => {
  const navigate = useNavigate();
  const { handleSubmit, values, handleChange, handleBlur,errors,touched } = useFormik({
    initialValues: {
      name: "",
      std: "",
      medium: "",
      age: "",
      dob: "",
      location: "",
    },
    validationSchema: fieldValidationSchema,
    onSubmit: () => {
      addData();
    },
  });

  const addData = () => {
    setStudentData([...studentdata, values]);
    navigate("/student");
  };

  return (
    <div>
        <Mainpage>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <TextField
              name="name"
              type="name"
              label="Name"
              value={values.name}
              className="in-field"
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <div style={{color:"crimson"}}>{touched.name && errors.name ? errors.name:""}</div>
            <TextField
              name="std"
              type="std"
              label="Std"
              className="in-field"
              value={values.std}
              onBlur={handleBlur}
              onChange={handleChange}
            ></TextField>
             <div style={{color:"crimson"}}> {touched.std && errors.std  ? errors.std:""}</div>
              <div  >
            <FormControl sx={{ minWidth: 480 }}>
              <InputLabel id="demo-simple-select-required-label">
                Medium
              </InputLabel>
              <Select
               name="medium"
               type="medium"
               onBlur={handleBlur}
                labelId="demo-simple-select-required-label"
                label="Medium*"
                value={values.medium}
                onChange={handleChange}
              >
                <MenuItem value={"Tamil"}>Tamil</MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
              </Select>
            </FormControl>
            </div>
           <div style={{color:"crimson"}}> {touched.medium && errors.medium ? errors.medium:""}</div>
            <TextField
              label="Age"
              className="in-field"
              value={values.age}
              name="age"
              onBlur={handleBlur}
              type="age"
              onChange={handleChange}
            ></TextField>
              <div style={{color:"crimson"}}>{touched.age && errors.age ? errors.age:""}</div>
            <TextField
              name="dob"
              label=""
              type="date"
              onBlur={handleBlur}
              className="in-field"
              value={values.dob}
              onChange={handleChange}
            ></TextField>
             <div style={{color:"crimson"}}> {touched.dob && errors.dob  ? errors.dob:""}</div>
            <TextField
              label="Location"
              name="location"
              onBlur={handleBlur}
              type="location"
              className="in-field"
              value={values.location}
              onChange={handleChange}
            ></TextField>
            <div style={{color:"crimson"}}>{touched.location && errors.location ? errors.location:""}</div>
          </div>
          <br />
          <Button variant="contained" type="submit">
            Add Student
          </Button>
          </form>
        </Mainpage>
    
    </div>
  );
};

export default CreateStudent;
