import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working.</p>
        <Person name="Mike" age="24"/>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="26">My hobbies: Racing</Person>
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
