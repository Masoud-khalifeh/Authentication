import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LogIn } from './LogIn';
import { SignIn } from './SignIn';
import { UserHandleContext } from './UserHandleContext';
import { Home } from './Home';
import {Dashboard} from './Dashboard'

function App() {
  return (
    <div className='app'>
      <UserHandleContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </UserHandleContext>
    </div>
  );
}

export default App;
