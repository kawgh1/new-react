import React, { Component} from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';

// To use react and access/manipulate State we need to use Classes

// State is a Javascript object with properties that we can access and manipulate anywhere *inside our class*
class App extends Component { // Component class gives us the setState method

  constructor() {
    super();      // super() which calls the parent Component - gives us access to this.state

    this.state = {
      
      monsters: [] // empty array

      // monsters: [  
        // { name: 'Frankenstein',
        //   id: 'a1'
        // },
        // { name: 'Dracula',
        //   id: 'a2'
        // },
        // { name: 'Bad Leroy Brown',
        //   id: 'a3'
        // }
      // 

    };
  }

// - LifeCycle Methods are methods that get called at different stages of when a component gets rendered
//      - "Mounting" is whenever React renders a Component onto the DOM for the first time
//          - when it does that, it calls whatever block of code is inside the method "componentDidMount() {...}"

componentDidMount() {

  fetch('https://jsonplaceholder.typicode.com/users') // fetch() returns a promise as a response
    .then(response => response.json())
    // .then(users => console.log(users));
    .then(users => this.setState({ monsters: users })); // set our array monsters to contain what is received in the response 'users'
}
  render() {
    return (
      <div className="App">
          <CardList monsters={ this.state.monsters } /> 
              
       
     </div>
    )
  }
}


// this is the default JSX code
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Sup Fool
//         </p>
//         <button>Change Text </button>
//       </header>
//     </div>
//   );
// }

export default App;
