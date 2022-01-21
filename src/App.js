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
import React from 'react';
import Welcome from './components/WelcomeFunction'
import Test  from './components/WelcomeClass'
import ShoppingList from './components/Shoppinglist';
import Clothes from './components/Clothes';
import ValidationProps from './components/ValidationProps';
import LifeCycle from './components/LifeCycle';
import Handling from './components/Handling-evnet';
function App() {
  return (
    <div>
        <Welcome />
        <Test />
        <ShoppingList name="Mark" />

        <div>
          <Clothes name="Quần Jean" type="Vải Jean" color="Đen" size="L">Cái quần jean</Clothes>
          <Clothes name="Áo thn" type="Cotton" color="Xanh dương" size="L">Cái áo thun</Clothes>
        </div>

        <ValidationProps />

        <LifeCycle/>

        <Handling/>
    </div>
  );
}
 
export default App;