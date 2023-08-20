import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Feeds from './components/feeds/Feeds';
import MyProfile from './components/profile/MyProfile';
import Register from './components/register/Register';
import Login from './components/login/login';
import CreateFeed from './components/feeds/CreateFeed';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainNavigation from './components/layouts/navigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation/>
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