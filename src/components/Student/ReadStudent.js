import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'

const ReadStudent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://api-database-sable.vercel.app/students");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const navigate = useNavigate();

  const addStudent = () => {
    navigate("/addstudent");
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api-database-sable.vercel.app/students${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error('Failed to delete student');
      }
      setError('Deleted successfully');
      setTimeout(() => {
        setError('');
        getData();
      }, 1000);
    } catch (error) {
      setError(error.message);
    }
  };

  const filteredData = data.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container my-2">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="card mt-3">
        <button onClick={addStudent} className="btn btn-primary" type="button">
          ADD NEW STUDENT
        </button>
      </div>
      <h2 className="text-center">ALL STUDENTS</h2>
      <input
        className="form-control my-3"
        type="search"
        placeholder="Search by name"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="row">
        {filteredData.map((student) => (
          <div key={student._id} className="col-3">
            <div className="card mt-2">
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <samp>Email:</samp>
                  {student.email}
                </h6>
                <p className="text-muted">
                  <samp>Phone No:</samp>
                  {student.phoneNo}
                </p>
                <p className="text-muted">
                  <samp>Roll NO:</samp>
                  {student.rollNo}
                </p>
                <p className="text-muted">
                  <samp>Address:</samp>
                  {student.address}
                </p>
                <Link
                  href="#"
                  className="card-link"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </Link>
                <Link to={`/${student._id}`} className="card-link">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadStudent;
