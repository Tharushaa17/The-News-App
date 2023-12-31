import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './userRegister.css';
import { createUser } from '../../../api/registerAPI';

const Register = () => {

    const authentication = useSelector(state => state.userReducer);
    
  const [userData, setUserData] = useState({
    first_name:"",last_name:"", email: "", password: "", image: ""
  }); 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData))
  }

  const navigate = useNavigate();

  const gotoLogin = () =>{
    navigate('/Loggin');
  }

  const gotoFeeds = () =>{
    navigate('/')
} 

  return (
    <div className='container' style={{ marginTop: '100px'}}>
        <div className="row align-items-center">
            <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                    <div className="card">
                        <div className='mx-auto col-lg-9'>
                        {
                                    authentication.user === null && authentication.error !== null 
                                ? 
                                    (
                                        <div className="alert alert-danger" style={{ textAlign: 'center' }} role="alert">
                                            Sorry! Username or Password not matched
                                        </div>
                                    ) 
                                : 
                                    authentication.error === null && authentication.user !== null 
                                ? 
                                    (
                                        <div className="alert alert-success" style={{ textAlign: 'center' }} role="alert">
                                            You are Successfully Logged in!
                                        </div>
                                    )
                                : 
                                    null
                            }

                            {
                                    authentication.error === null && authentication.user !== null 
                                ? 
                                    (
                                        setTimeout(() => {  gotoFeeds() }, 1500)
                                    )
                                : 
                                    null
                            }

                            <div><br></br></div>
                                <h1 className='text-center'  style={{  color : "#29335c"}}>User Registration..</h1>
                                
                            <div><br></br></div>
                            <div className="form-row d-flex">
                                <div className="form-group col-lg-6">
                                    <label for="inputEmail4">First Name</label>
                                    <input type="text" className="form-control" value={userData.first_name} onChange={(e)=>{ setUserData({ ...userData, first_name: e.target.value })}}/>
                                </div>
                                &nbsp;
                                <div className="form-group col-lg-6">
                                    <label for="inputPassword4">Last Name</label>
                                    <input type="text" className="form-control" value={userData.last_name} onChange={(e)=>{ setUserData({ ...userData, last_name: e.target.value })}}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="name">Email</label>
                                <input type='email' className="form-control" value={userData.email} onChange={(e)=>{ setUserData({ ...userData, email: e.target.value })}}/>
                            </div>
                            <div className="form-group">
                                <label for="name">Password</label>
                                <input type='password' className="form-control" value={userData.password} onChange={(e)=>{ setUserData({ ...userData, password: e.target.value })}}/>
                            </div>
                            <div className="form-group">
                                <label for="name">Image</label>
                                <input type='file' className="form-control" value={userData.image} onChange={(e)=>{ setUserData({ ...userData, image: e.target.value })}}/>
                            </div>
                            <div><br></br></div>
                            <div className="form-group">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                                </div>
                            </div>
                            <div><br></br></div>
                            <div className="form-group text-center">    
                                <button type='submit' className='btn' style={{  background: "#29335c", color: "#ffffff" }}>Submit</button>
                            </div>  
                            <div className="or-container"><div className="line-separator"></div> <div className="or-label">or</div><div className="line-separator"></div></div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                  <a className="btn btn-lg btn-google btn-block btn-outline" href='3'><img alt='' src="https://img.icons8.com/color/16/000000/google-logo.png"/>&nbsp; Signup Using Google</a>
                                </div>
                            </div>
                            <br/>
                            <p className="text-inverse text-center">Already have an account ? <button className="btn btn-link" onClick={gotoLogin} data-abc="true">Login</button></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;
