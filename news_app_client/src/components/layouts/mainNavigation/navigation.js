import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/action/actionCreators';
import { persistor } from '../../../redux/store';

const MainNavigation = () => {
  const authentication = useSelector(state => state.userReducer);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(prevState => !prevState);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
  };

  return (
    <>
      <header>
        <h1>
          <h4>THE</h4>NEWS
        </h1>
        <nav className={isNavOpen ? 'responsive_nav' : ''}>
          <Link to="/" onClick={toggleNavbar} >Feeds</Link>
          <Link to="/Profile" onClick={toggleNavbar} >My Profile</Link>
          {
                  authentication.user === null && authentication.error === null 
              ? 
                  (
                    <Link to="/Register" onClick={toggleNavbar} >Create Profile</Link>
                  ) 
              : 
                  authentication.error === null && authentication.user.authStatus === true 
              ? 
                  ( 
                    <></>
                  ) 
              :
                  authentication.user === null && authentication.error !== null 
              ?
                (
                  <Link to="/Register" onClick={toggleNavbar} >Create Profile</Link>
                ) 
              :
                  null
          }
          
          <Link to="/CreateFeed" onClick={toggleNavbar} >Add New Article</Link>

          <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={toggleNavbar}>
          <FaBars />
        </button>
        <button className='nav-user' onClick={handleLogout}>User</button>
      </header>
    </>
  );
};

export default MainNavigation;