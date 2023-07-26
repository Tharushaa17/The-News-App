import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Feeds from './components/Feeds';
import MyProfile from './components/MyProfile';
import Register from './components/Register';
import Login from './components/Login';
import CreateFeed from './components/CreateFeed';
import './App.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <>
      <header>
        <h1><h4>THE</h4>NEWS</h1>
        <nav ref={navRef}>
            <Link to='/'>Feeds</Link>
            <Link to='/Profile'>My Profile</Link>
            <Link to='/Register'>Create Profile</Link>
            <Link to='/CreateFeed'>Add New Article</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
			  </button>
      </header>
      <Provider store={store}>
        <Routes>
              <Route path="/" index element={<Feeds/>}/>
              <Route path="/Profile" element={<MyProfile/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Loggin" element={<Login/>}/>
              <Route path="/CreateFeed" element={<CreateFeed/>}/>
        </Routes> 
      </Provider>  
    </>
  )
}

export default App