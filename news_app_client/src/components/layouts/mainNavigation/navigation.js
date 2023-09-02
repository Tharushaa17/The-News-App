import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/action/actionCreators';
import { persistor } from '../../../redux/store';

const MainNavigation = () => {
  const authentication = useSelector(state => state.userReducer.user);

  let initialState = false;
  let userLevel;

    if(authentication === null || authentication === undefined){
      initialState = true;
    }else if(authentication.user === null && authentication.error !== null){
      initialState = true;
    }else if(authentication.token){
      userLevel = authentication.user.userRole;
    }

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
        <nav style={{ 'alignItems': 'center' }} className={isNavOpen ? 'responsive_nav' : ''}>
          <Link to="/" onClick={toggleNavbar} >Feeds</Link>
          <Link to="/Profile" onClick={toggleNavbar} >My Profile</Link>
          { initialState === true ? ( <Link to="/Register" onClick={toggleNavbar} >Create Profile</Link> ) : ( <></> ) }
          { userLevel === 3 ? ( <Link to="/CreateFeed" onClick={toggleNavbar} >Add New Article</Link> ) : ( <></> ) }
          <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={toggleNavbar}>
          <FaBars />
        </button>
        { initialState === false ? ( <button className='nav-user' onClick={handleLogout}> {authentication.user.first_name} {authentication.user.last_name} </button> ) : ( <></> ) }  
      </header>
    </>
  );
};

export default MainNavigation;