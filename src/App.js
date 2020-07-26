import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state={
     persons: [
       {id: '1',name:'Randal', age:45},
       {id: '2',name: 'Abebe', age:30},
       {id: '3',name:'Kenna', age:25}
     ],
     otherState : 'Some other value',
     showPersons : false
   }
   deletePersonHandler = (personIndex)=>{
      //always make a copy before mutating to avoid sideEffects
      // either slice or spread a new copy of your state arr obj
       //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons : persons});
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
            {this.state.persons.map((person,index) =>{
              return <Person
                      click = {()=>this.deletePersonHandler(index)}
                      name= {person.name}
                       age={person.age}
                       key={person.id}
                      />
            })}
           
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
