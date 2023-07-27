import SignIn from './Components/Signin';
import './App.css';
import { Router,Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Signup/>} />
<Route path='/signin' element={ <SignIn />} />
     
      </Routes>
     
    </div>
  );
}

export default App;
