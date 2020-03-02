import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <Person name="Vaina" age ="40" />
      <Person name="Oskar" age ="210">My Hobby is: Battlehammer</Person>
      <Person name="Beep" age ="62" />
    </div>
  ); 
}

export default App;
