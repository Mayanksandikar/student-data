import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = ({ teacherId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, addedBy: teacherId }),
      });
      if (response.ok) {
        navigate('/students'); // Redirect to students page after adding student
      } else {
        console.error('Error adding student');
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
