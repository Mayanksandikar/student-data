import './App.css';
import{BrowserRouter , Routes ,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Card from './components/Cards/Card';
import SingUp from './components/Cards/SingUp';
import SingUpStudent from './components/Student/SingUpStudent';
import StudentInfo from './components/Student/studentInfo';
import ReadStudent from './components/Student/ReadStudent';
import UpdateStudent from './components/Student/UpdateStudent';
import Science from './components/Course/Science';
import Mba from './components/Course/Mba';
import Mca from './components/Course/Mca';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<Card />}  />
        <Route  path="/singup" element={<SingUp />}  />
        <Route  path="/addstudent" element={<SingUpStudent />}  />
        <Route  path="/infostudent" element={<StudentInfo />}  />
        <Route  path="/read" element={<ReadStudent />}  />
        <Route  path="/:id" element={<UpdateStudent />}  />
        <Route  path="/science" element={<Science />}  />
        <Route  path="/mba" element={<Mba />}  />
        <Route  path="/mca" element={<Mca />}  />

      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
