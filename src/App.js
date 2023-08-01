import SignIn from './Components/Signin';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Mainpage from './Base/Mainpage';
import Dashboard from './Components/Dashboard';
import Student from './Components/Student';
import Teacher from './Components/Teacher'
import ViewStudent from './Components/ViewStudent';
import CreateStudent from './Components/CreateStudent';
import EditStudent from './Components/EditStudent';
import { useState } from 'react';
import studData from './Components/StudentData';
import CreateTeacher from './Components/CreateTeacher';
import ViewTeacherData from './Components/ViewTeacherData';
import EditTeacher from './Components/EditTeacher';

function App() {
  const[studentdata,setStudentData]=useState(studData)
  return (
    <div>
      <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/signup' element={ <Signup/>} />     
      <Route path='/mainpage/dashboard' element={<Mainpage/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/student' element={<Student
      studentdata={studentdata}
      setStudentData={setStudentData}
      />} />
      <Route path='/teacher' element={<Teacher/>} />
      <Route path='/viewstudent/:id' element={<ViewStudent
      studentdata={studentdata}
      />}/>
      <Route path='/createstudent' element={<CreateStudent 
      studentdata={studentdata}
      setStudentData={setStudentData}
      />}/>
      <Route path='/editstudent/:id' element={<EditStudent
      studentdata={studentdata}
      setStudentData={setStudentData}
      />}/>
  
      <Route path='/createteacher' element={<CreateTeacher/>}/>
      <Route path='/viewteacherdata/:id' element={<ViewTeacherData/>}/>
      <Route path='/editteacher/:id' element={<EditTeacher/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
