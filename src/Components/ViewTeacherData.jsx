import React, { useEffect, useState } from "react";
import Mainpage from "../Base/Mainpage";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
const ViewTeacherData = () => {
  const { id } = useParams();
  const [viewdata, setViewData] = useState([]);

  const viewdatas = async () => {
    try {
      const response = await axios.get(
        `https://64c60982c853c26efadb0c22.mockapi.io/teachersData/${id}`
      );
      setViewData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewdatas();
  }, []);
  return (
    <div>
      <Mainpage>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>Name:{viewdata.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Qualification:{viewdata.qualification}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Medium:{viewdata.medium}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Age:{viewdata.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dob:{viewdata.dob}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Mainpage>
    </div>
  );
};

export default ViewTeacherData;
