import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state={
     persons: [
       {name: 'Abebe', age:30},
       {name:'Randal', age:45},
       {name:'Kenna', age:25}
     ],
     otherState : 'Some other value',
     showPersons : false
   }
    toggleNameHandler = (newName)=>{
      //console.log('Toggle button clicked');
      this.setState({persons: [
        {name: newName, age:30},
        {name:'Tyson', age:35},
        {name:'Kenna', age:40}
      ]})
    }
    nameChangeHandler = (event) => {
      this.setState({persons: [
        {name: 'Abebe', age:30},
        {name:'Tyson', age:35},
        {name:event.target.value, age:40}
      ]})
    }
    togglePersonHandler =() =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
    }
  render() {
     const style ={
       backgroundColor: 'white',
       font:'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer'
     }
     let persons = null;
     if(this.state.showPersons){
        persons = (
          <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
              />
            <Person 
            name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              />
            <Person 
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.toggleNameHandler.bind(this,'Moxxy')}
              changed={this.nameChangeHandler}
              >
                My hobbies include : Dancing
              </Person>
         </div> 
        )
     }
    return (
      <div className="App">
       <h1>Hi,This is a react app.</h1>
       <p>Hell yeah</p>
       <button 
       style ={style}
       onClick={this.togglePersonHandler}>
         Toggle Name
         </button>
           {persons}
         
      </div>
    );
  }
}


export default App;
