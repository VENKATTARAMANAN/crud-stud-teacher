import React, { useEffect, useState } from "react";
import Mainpage from "../Base/Mainpage";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { fieldValidationSchema } from "./CreateStudent";
import { useFormik } from "formik";

const EditStudent = ({ studentdata, setStudentData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  var editdata = studentdata[id];
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: editdata.name,
        std: editdata.std,
        medium: editdata.medium,
        age: editdata.age,
        dob: editdata.dob,
        location: editdata.location,
      },
      validationSchema: fieldValidationSchema,
      onSubmit: (values) => {
        console.log("onsubmit", values);
        editStudent();
      },
    });

  const editStudent = () => {
    studentdata[id] = values;
    setStudentData([...studentdata]);
    navigate("/student");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Mainpage>
          <div className="input">
            <TextField
              name="name"
              type="name"
              label="Name"
              className="in-field"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <div style={{ color: "crimson" }}>
              {touched.name && errors.name ? errors.name : ""}
            </div>
            <TextField
              name="std"
              type="std"
              label="Class"
              className="in-field"
              value={values.std}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <div style={{ color: "crimson" }}>
              {touched.std && errors.std ? errors.std : ""}
            </div>
            <FormControl required sx={{ maxWidth: 480 }}>
              <InputLabel id="demo-simple-select-required-label">
                Medium
              </InputLabel>
              <Select
                label="Medium*"
                value={values.medium}
                onChange={handleChange}
                onBlur={handleBlur}
                name="medium"
                type="medium"
              >
                <MenuItem value={values.medium}>
                  <em>{values.medium}</em>
                </MenuItem>
                <MenuItem value={"Tamil"}>Tamil</MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
              </Select>
            </FormControl>
            <div style={{ color: "crimson" }}>
              {touched.medium && errors.medium ? errors.medium : ""}
            </div>
            <TextField
              name="age"
              type="age"
              label="Age"
              className="in-field"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <div style={{ color: "crimson" }}>
              {touched.age && errors.age ? errors.age : ""}
            </div>
            <TextField
              name="dob"
              label=""
              type={"date"}
              className="in-field"
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <div style={{ color: "crimson" }}>
              {touched.dob && errors.dob ? errors.dob : ""}
            </div>
            <TextField
              name="location"
              type="location"
              label="Location"
              className="in-field"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <div style={{ color: "crimson" }}>
              {touched.location && errors.location ? errors.location : ""}
            </div>
          </div>
          <br />
          <Button variant="contained" type="submit">
            Edit Student
          </Button>
        </Mainpage>
      </form>
    </div>
  );
};

export default EditStudent;
