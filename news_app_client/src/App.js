import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import MainNavigation from './components/layouts/mainNavigation/navigation';
import { PersistGate } from 'redux-persist/integration/react';
import Feeds from './components/pages/feeds/thumbnailFeeds';
import MyProfile from './components/pages/profile/MyProfile';
import Register from './components/pages/userRegister/userRegister';
import Login from './components/pages/userLogin/userLogin';
import CreateFeed from './components/pages/createArticle/newFeed';
import NotFound from './components/layouts/notFound/404';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation/>
            <Routes>
                  <Route path="/" index element={<Feeds/>}/>
                  <Route path="/Profile" element={<MyProfile/>}/>
                  <Route path="/Register" element={<Register/>}/>
                  <Route path="/Loggin" element={<Login/>}/>
                  <Route path="/CreateFeed" element={<CreateFeed/>}/>
                  <Route path="*" element={<NotFound/>}/>
            </Routes> 
        </PersistGate>
      </Provider>  
    </>
  )
}

export default App