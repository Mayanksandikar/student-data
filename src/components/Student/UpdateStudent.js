
import React,  {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

//get singeluser updated data
const UpdateStudent = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [rollNo, setRollNo] = useState("")
    const [address, setAddress] = useState("")

    const[error , setError]=useState("")
    const navigate = useNavigate();
    const { id } = useParams();

    const getSingleUser = async ()=>{
        const response = await fetch(`https://api-database-zvhj.vercel.app/students/${id}`);
        const result = await response.json();
        if(!response.ok) {
            console.log(result.error); 
            setError(result.error);
            
          }
          if(response.ok) {
            setError("");
            console.log("updated user ", result);
            setName(result.name)
            setEmail(result.email)
            setPhoneNo(result.phoneNo)
            setAddress(result.address)
            setRollNo(result.rollNo)
            
          
          }
    };
    useEffect(() => {
        getSingleUser();
      }, []);

 //  send updated data to backend
    const handelUpdate = async (e) =>{
        e.preventDefault();

        const updatedUser = {name , email , phoneNo , rollNo ,address}
        const response = await fetch(`https://api-database-zvhj.vercel.app/students/${id} `, {
            method:"PATCH",
            body:JSON.stringify(updatedUser),
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

            navigate("/read")
        }
    }

    return (
        <div className="container my-2">

            {error && <div class="alert alert-danger" role="alert">{error}
</div>}
            <h2 className="text-center" >Edit the Data</h2>
            <form onSubmit={handelUpdate}>
            <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={ (e)=>setName(e.target.value)}  />
  </div>

  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={ (e)=>setEmail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label className="form-label">phone No</label>
    <input type="number" className="form-control" value={phoneNo} onChange={ (e)=>setPhoneNo(e.target.value)}  />
  </div>
  
  <div className="mb-3">
    <label className="form-label">roll no</label>
    <input type="number" className="form-control" value={rollNo} onChange={ (e)=>setRollNo(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label className="form-label">Address</label>
    <input type="text" className="form-control" value={address} onChange={ (e)=>setAddress(e.target.value)}  />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            
        </div>
    )
}

export default UpdateStudent
