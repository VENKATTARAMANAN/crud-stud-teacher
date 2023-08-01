import SignIn from './Components/Signin';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Mainpage from './Base/Mainpage';
import Dashboard from './Components/Dashboard';
import Student from './Components/Student';
import Teacher from './Components/Teacher'
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/signup' element={ <Signup/>} />     
      <Route path='/mainpage/dashboard' element={<Mainpage/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/student' element={<Student/>} />
      <Route path='/teacher' element={<Teacher/>} />
      </Routes>
     
    </div>
  );
}

export default App;
