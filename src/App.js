import React, { Component } from 'react';
import TodoList from  "./TodoList";

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">

            <TodoList/>

      </div>
     );
  }
}
 
export default App;




// Vider ce qui ne sert à rien dans le projet create-react-app de base
// Créer un composant TodoList.
// Celui-ci a des tâches, et des sous-tâches. 