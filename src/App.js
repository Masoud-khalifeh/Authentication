import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LogIn } from './LogIn';
import { SignIn } from './SignIn';
import { UserHandleContext } from './UserHandleContext';
import { Home } from './Home';

function App() {
  return (
    <div className='app'>
      <UserHandleContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </UserHandleContext>
    </div>
  );
}

export default App;
