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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
const fieldValidationSchema = yup.object({
  name: yup.string().required("Please fill the name"),
  qualification: yup.string().required("Please fill the qualification"),
  medium: yup.string().required("Please select the medium"),
  age: yup.string().required("Please enter the age"),
  dob: yup.string().required("Please enter the age"),
});

const CreateTeacher = () => {
  const navigate = useNavigate();
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        qualification: "",
        medium: "",
        age: "",
        dob: "",
      },
      validationSchema: fieldValidationSchema,
      onSubmit: () => {
        addData();
      },
    });

  const addData = async () => {
    try {
      const response = await axios.post(
        "https://64c60982c853c26efadb0c22.mockapi.io/teachersData",
        values
      );
      navigate("/teacher");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Mainpage>
          <div className="input">
            <TextField
              type="name"
              name="name"
              label="Name"
              className="in-field"
              onBlur={handleBlur}
              onChange={handleChange}
            ></TextField>
            <div style={{ color: "crimson" }}>
              {touched.name && errors.name ? errors.name : ""}
            </div>
            <TextField
              type="qualification"
              name="qualification"
              label="Qualification"
              className="in-field"
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <div style={{ color: "crimson" }}>
              {touched.qualification && errors.qualification
                ? errors.qualification
                : ""}
            </div>
            <FormControl sx={{ maxWidth: 480 }}>
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
            <div style={{ color: "crimson" }}>
              {touched.medium && errors.medium ? errors.medium : ""}
            </div>

            {/* <TextField
            label="Medium"
            className="in-field"
            onChange={(e) => setAddTeacher({ ...addteacher, medium: e.target.value })}
          ></TextField> */}
            <TextField
              type="age"
              name="age"
              label="Age"
              className="in-field"
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
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            <div style={{ color: "crimson" }}>
              {touched.dob && errors.dob ? errors.dob : ""}
            </div>
          </div>
          <br />
          <Button variant="contained" type="submit">
            Add Student
          </Button>
        </Mainpage>
      </form>
    </div>
  );
};

export default CreateTeacher;
