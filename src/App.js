
import React, { Component } from 'react'
import './App.css'
import ComponentC from './Components/ComponentC'
import { UserProvider } from './Components/userContext'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProvider value="Vishwas">
        <ComponentC />
        </UserProvider>
      </div>
    )
  }
}







// // React original
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
