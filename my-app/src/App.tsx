import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './Fetures/UserList';
import User from './Fetures/User';

function App() {
  return (
    <div className="App">
      <UserList names={['roei','maor','romi','bar']}></UserList>
    </div>
  );
}

export default App;
