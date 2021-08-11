# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

REACT NOTES

React Concepts

1. Don't touch the DOM. React does it.
2. Build websites like Lego blocks
3. Unidirectional data flow
4. UI, the rest is up to you

Features of a Great React Developer

1. Decide on which Components and their structure
2. Decide on the State and where it lives
3. What changes when State changes


State is a Javascript object with properties that we can access and manipulate anywhere inside our class

class App extends Component { // Component class gives us the setState method

constructor() {
super(); // super() which calls the parent React Component's constructor() - gives us access to this.state

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

So this code starts the app with a State already in play, the monsters array

Class App has a method called render();

render() {
return (
<div className="App">
{
this.state.monsters.map(monster => <h1>{ monster.name }</h1>)
}
</div>
)
}

### VS Code fonts and settings

- Editor: Font Family - controls the font family

- Editor: Font Ligatures - enables/disables font ligatures

- Fonts: 'FiraCode', Consolas, 'Courier New', monospace

### Extensions

- Rainbow Brackets - rainbow brackets extension for VS Code

- Reactjs code snippets

Ex)

    cwm→	componentWillMount method
    cdm→	componentDidMount method
    cwr→	componentWillReceiveProps method
    scu→	shouldComponentUpdate method
    cwup→	componentWillUpdate method
    cdup→	componentDidUpdate method
    cwun→	componentWillUnmount method
    gsbu→	getSnapshotBeforeUpdate method
    gdsfp→	static getDerivedStateFromProps method
    cdc→	componentDidCatch method
    ren→	render method

- Snazzy Operator Color Theme

- Snazzy Darker with Italics Color Theme

- Spirited Away Color Theme

- vscode-icons

- vscode-styled-components - syntax highlighting for styled-components

- Babel

- ESLint - integrates ESLint Javascript into VS Code

- GraphQL - syntax highlighting for GraphQL queries - Maxime Quandalle

- GraphQL - GraphQL extension for VS code adds syntax

- Markdown All in One

- Prettier- Code formatter


### NPM vs YARN

- Install dependencies from package.json: npm install == yarn

- Install a package and add to package.json: npm install package --save == yarn add package

- Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev

- Remove a dependency from package.json: npm uninstall package --save == yarn remove package

- Upgrade a package to its latest version: npm update --save == yarn upgrade

- Install a package globally: npm install package -g == yarn global add package

- To use React and access/manipulate State we need to use Class (or Hooks)
