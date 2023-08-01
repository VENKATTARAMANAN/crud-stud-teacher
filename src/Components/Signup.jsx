import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
e.preventDefault();
    }
   
  return (
    <div className="container">
      {" "}
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
        <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
      <div className="signup">
      <TextField
        className="outlined"
        label="Email"
      />
      <TextField
        className="outlined"
        label="Password"
      />
      <TextField 
        className="outlined"
        label="Confirm Password"
      />
    <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
      <Button type="submit" variant="contained" onClick={()=>navigate('/')}>Signup</Button>
      </div>
      </form>
    </div>
  );
};

export default Signup;
