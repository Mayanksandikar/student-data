import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const StudentInfo = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [rollNo, setRollNo] = useState("")
  const [address, setAddress] = useState("")
  

  const[error , setError]=useState("")
  const navigate = useNavigate();

  console.log(name,email,phoneNo,rollNo,address);
const handelSubmit = async(e) => {
  e.preventDefault();

  const addUser = {name , email , phoneNo,address,rollNo}
  const response = await fetch("http://localhost:5000/students/signupstudent" , {
    method:"POST",
    body:JSON.stringify(addUser),
    headers:{
        "Content-Type":"application/JSON",
    }

})
  const result = await response.json();

  if(!response.ok){
      console.log(result.error);
      setError(result.error)
  }

  if(response.ok){
      console.log(result);
      setError("")
      setName("")
      setEmail("")
      setPhoneNo("")
      setAddress("")
      setRollNo("")
      navigate("/read")
  }
} 


    return (
            <section className="vh-100" style={{borderRadius: "#eee"}}>

  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">New Student</p>

                <form className="mx-1 mx-md-4" onSubmit={ handelSubmit }>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text"  className="form-control" value={name} onChange={ (e)=>setName(e.target.value)}   />
                      <label className="form-label">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email"  className="form-control" value={email} onChange={ (e)=>setEmail(e.target.value)}  />
                      <label className="form-label" >Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="text"  className="form-control" value={phoneNo} onChange={ (e)=>setPhoneNo (e.target.value)}   />
                      <label className="form-label" >Phone Number</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="text"  className="form-control" value={address} onChange={ (e)=>setAddress(e.target.value)}   />
                      <label className="form-label" >Address</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="text"  className="form-control" value={rollNo} onChange={ (e)=>setRollNo(e.target.value)}   />
                      <label className="form-label" >Roll Number</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit"  className="btn btn-primary btn-lg">Add Student</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {error && <div class="alert alert-danger" role="alert">{error}</div>}
  
</section>
            
     
    )
}

export default StudentInfo
