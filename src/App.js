import React, { Component} from 'react';
import './App.css';

// Named Import
import { CardList } from './components/card-list/card-list.component';

// Default Import
import SearchBox from './components/search-box/search-box.component';

// To use react and access/manipulate State we need to use Classes

// State is a Javascript object with properties that we can access and manipulate anywhere *inside our class*
class App extends Component { // Component class gives us the setState method

  constructor() {
    super();      // super() which calls the parent Component - gives us access to this.state

    this.state = {

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
      
      monsters: [], // empty array

      searchField: ''

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

    const monsters = this.state.monsters;
    const searchField = this.state.searchField;

    // same as const {monsters, searchField } = this.state;

    // this says = show us the monsters whose names include the letters typed by user into searchField
    const filteredMonsters = monsters.filter(monster => ( monster.name.toLowerCase()
                                                                  .includes(searchField.toLowerCase())));

    return (
      <div className="App">

          {/* <input type='search' placeholder='search monsters..' 
                  onChange={e => this.setState({ searchField: e.target.value }) }/> */}
          {/* <CardList monsters={ this.state.monsters } />  */}

          <SearchBox placeholder='search monsters..' 
                      handleChange={ e => this.setState({searchField: e.target.value})} />
          <CardList monsters={ filteredMonsters } /> 
       
     </div>
    );
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
