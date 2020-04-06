import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'pers1', name: "Max", age: 28 },
      { id: 'pers2', name: "Manu", age: 29 },
      { id: 'pers3', name: "Stephanie", age: 26 },
    ],
    otherState: "Some other value",
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsNameHandler = () => {
    const doesShow = this.showPersons;
    this.setState({ showPersons: !doesShow });
  };  

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(index)}
              key={person.id} />
            })}
        </div>
      )
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working.</p>
        <button style={style} onClick={this.togglePersonsNameHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
