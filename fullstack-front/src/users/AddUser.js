import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

  let navigate = useNavigate()

  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: ""
  })

  const { name, username, email } = user

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value })
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add a New Exercise</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor="ExerciseName" className='form-label'>
                Exercise Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter an Exercise"
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="MusclesWorked" className='form-label'>
                Muscles Worked
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Muscles Worked"
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="Description" className='form-label'>
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Description"
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className='btn btn-outline-primary'>Submit</button>
            <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
