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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const fieldValidationSchema = yup.object({
  name: yup.string().required("Please fill the name"),
  qualification: yup.string().required("Please fill the qualification"),
  medium: yup.string().required("Please select the medium"),
  age: yup.string().required("Please enter the age"),
  dob: yup.string().required("Please enter the age"),
});

const EditTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getvalue, setGetValue] = useState({});

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: getvalue.name,
        qualification: getvalue.qualification,
        medium: getvalue.medium,
        age: getvalue.age,
        dob: getvalue.dob,
      },
      validationSchema: fieldValidationSchema,
      onSubmit: () => {
        editTeacher();
      },
    });
  useEffect(() => {
    getTeacher();
  }, []);
  const getTeacher = async () => {
    try {
      const response = await axios.get(
        `https://64c60982c853c26efadb0c22.mockapi.io/teachersData/${id}`
      );
      setGetValue(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editTeacher = async () => {
    try {
      const response = await axios.put(
        `https://64c60982c853c26efadb0c22.mockapi.io/teachersData/${id}`,
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
              name="name"
              type="name"
              id="name"
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
              type="qualification"
              name="qualification"
              label="Class"
              className="in-field"
              value={values.qualification}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
             <div style={{ color: "crimson" }}>
              {touched.qualification && errors.qualification ? errors.qualification : ""}
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
              type="age"
              name="age"
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
          </div>
          <br />
          <Button variant="contained" onClick={editTeacher}>
            Edit Teacher
          </Button>
        </Mainpage>
      </form>
    </div>
  );
};

export default EditTeacher;
