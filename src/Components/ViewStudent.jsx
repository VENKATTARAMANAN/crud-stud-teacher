import React, { useEffect } from "react";
import Mainpage from "../Base/Mainpage";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const ViewStudent = ({studentdata}) => {
  const { id } = useParams();
  var value = studentdata[id];
  
  return (
    <div>
      <Mainpage>
        <TableContainer>
          <Table  sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
            <TableRow>
              <TableCell>Name:{value.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Class:{value.std}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Medium:{value.medium}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age:{value.age}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dob:{value.dob}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Location:{value.location}</TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Mainpage>
    </div>
  );
};

export default ViewStudent;
