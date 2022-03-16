
import './styles.css';
import StudentLogin from '../StLogin';
import UserLogin from '../ULogin';
import Course from '../Course';
import Navbar from "../Navbar"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return ( 
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<StudentLogin/>} />
        <Route path='/login'  element={<StudentLogin/>} />
        <Route path='/students'  element={<UserLogin/>} />
        <Route path='/staff'  element={<UserLogin/>} />
        <Route path='/admin'  element={<UserLogin/>} />

        <Route path='/course'  element={<Course/>} />


        {/* <Route path='/account' element={<StLogin/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
