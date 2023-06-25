import React, { useState } from 'react';
import './App.css';
import { LogIn } from './LogIn';
import { SignIn } from './SignIn';
import { UserHandleContext } from './UserHandleContext';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <UserHandleContext>
        <SignIn />
        <hr/>
        <LogIn/>
        <hr/>
        <Home/>
      </UserHandleContext>





    </div>
  );
}

export default App;
