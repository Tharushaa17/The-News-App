import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logginUser } from '../../redux/action/user';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const authentication = useSelector(state => state.userReducer);

    const [userData, setUserData] = useState({
        email: "", password: ""
    }); 

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logginUser(userData))
    }

    const gotoRegister = () =>{
        navigate('/Register');
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
                                <h1 className='text-center'  style={{  color : "#29335c"}}>User Loggin..</h1>
                            <div><br></br></div>
                            <div className="form-group">
                                <label for="name">Email</label>
                                <input type='email' className="form-control" value={userData.email} onChange={(e)=>{ setUserData({ ...userData, email: e.target.value })}}/>
                            </div>
                            <div className="form-group">
                                <label for="name">Password</label>
                                <input type='password' className="form-control" value={userData.password} onChange={(e)=>{ setUserData({ ...userData, password: e.target.value })}}/>
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
                                  <a className="btn btn-lg btn-google btn-block btn-outline" href='3'><img alt='' src="https://img.icons8.com/color/16/000000/google-logo.png"/>&nbsp; Loggin Using Google</a>
                                </div>
                            </div>
                            <br/>
                            <p className="text-inverse text-center">Don't have an account ? <button class="btn btn-link" onClick={gotoRegister} data-abc="true">Register</button></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login