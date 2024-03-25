import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Cards/card-code.css"

const Card = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const loginUser = { email, password };

    try {
      const response = await fetch("https://api-database-zvhj.vercel.app/api/teachers/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
});

      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
      } else {
        setError('');
        setEmail('');
        setPassword('');
        // Store the user token in local storage or cookies for authentication
        // Redirect to the dashboard or wherever you want the user to go after successful login
        navigate('/addstudent');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

  };

  return (
    
    <div>
      <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">

        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">School</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" value={email} onChange={ (e)=>setEmail(e.target.value)}   className="form-control form-control-lg" />
                    <label className="form-label" >Email address</label>
                  </div>
                    
                    
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Password</label>
</div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <Link to="/singup"
                      style={{color: "#393f81"}}>Register here</Link></p>
              
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {error && <div class="alert alert-danger" role="alert">{error}</div>}

</section>

    </div>

  )
}

export default Card
