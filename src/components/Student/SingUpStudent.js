import React from 'react'
import { useNavigate } from 'react-router';
import StudentInfo from './studentInfo';

const SingUpStudent = () => {
const navigate = useNavigate();

const addStudent = async (e)=>{
    
    navigate("/read")

}

    return (
        <div>
            <div class="d-grid gap-2">
  <button onClick={ addStudent} class="btn btn-primary" type="button">Read STUDENT</button>
  <StudentInfo />
</div>
            
        </div>
    )
}

export default SingUpStudent
