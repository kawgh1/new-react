import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

// To use react and access/manipulate State we need to use Classes

// State is a Javascript object with properties that we can access and manipulate anywhere *inside our class*
class App extends Component { // Component class gives us the setState method

  constructor() {
    super();      // super() which calls the parent Component - gives us access to this.state

    this.state = {
      
      monsters: [
        
        { name: 'Frankenstein',
          id: 'a1'
        },
        { name: 'Dracula',
          id: 'a2'
        },
        { name: 'Bad Leroy Brown',
          id: 'a3'
        }
      ]
    };
  }


  render() {
    return (
      <div className="App">
       {
         this.state.monsters.map(monster => <h1>{ monster.name }</h1>)
       }
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
