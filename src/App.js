import React, { useState } from 'react';
import './App.css';
import { LogIn } from './LogIn';
import { SignIn } from './SignIn';
import { UserHandleContext } from './UserHandleContext';

function App() {
  return (
    <div className="App">
      <UserHandleContext>
        <SignIn />
      </UserHandleContext>





    </div>
  );
}

export default App;
