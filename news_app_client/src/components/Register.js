import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../action/user';

const Register = () => {

  const [userData, setUserData] = useState({
    name:"", email: "", password: "", image: ""
  }); 

  const dispatch = useDispatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData))
  }

  return (
    <div className='container'>
        <div className="row align-items-center" style={{ height : "100vh"}}>
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                    <div className="card" style={{width: "30rem"}}>
                        <div className='mx-auto'><br></br> <br></br>
                            <h1 className='text-center'  style={{  color : "#400080"}}>User Register </h1>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type='text' className="form-control" value={userData.name} onChange={(e)=>{ setUserData({ ...userData, name: e.target.value })}}/>
                            </div>
                            <div className="form-group">
                                <label for="name">Email</label>
                                <input type='text' className="form-control" value={userData.email} onChange={(e)=>{ setUserData({ ...userData, email: e.target.value })}}/>
                            </div>
                            <div className="form-group">
                                <label for="name">Password</label>
                                <input type='text' className="form-control" value={userData.password} onChange={(e)=>{ setUserData({ ...userData, password: e.target.value })}}/>
                            </div>
                            <div className="form-group">
                                <label for="name">Image</label>
                                <input type='file' className="form-control" value={userData.image} onChange={(e)=>{ setUserData({ ...userData, image: e.target.value })}}/>
                            </div>
                            <div className="form-group text-center">    
                                <button type='submit' className='btn' style={{  background: "#400080", color: "#ffffff" }}>Submit</button>
                            </div>   
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;
