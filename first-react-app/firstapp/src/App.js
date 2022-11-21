import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./NavBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [nameToShow, setNameToShow] = React.useState('Tobia')

  const tobia = (
    <Header
      className="header-tobia"
      name="Tobia"
      color="blue"
      fruit="blueberry"
    />
  );

  const tanya = <Header name="Tanya" color="orange" fruit="orange" />;

  return (
    <div className="App">
      <NavBar>
        <li>Homepage</li>
        <li>About</li>
        <li><button onClick={() => setNameToShow("Tanya")}>Show Tanya</button></li>
        <li><button onClick={() => setNameToShow("Tobia")}>Show Tobia</button></li>
      </NavBar>
      {nameToShow === "Tobia" ? tobia : tanya}
      <Footer nickname="Jimy" />
    </div>
  );
}

export { App, Header, Footer };

// import logo from './logo.svg';
// import './App.css';
// import {NavBar} from "./NavBar"
// import {Header} from "./components/Header";
// import {Footer} from "./components/Footer"


// function App() {
//   const[nameToShow, setNameToShow] = React.useState('Tobia')

//   return (
//     <div className="App">
//       <NavBar>
//         <li>Page 1</li>
//         <li>Page 2</li>
//         <li><button onClick ={()=> setNameToShow("Tanya")}>Show Tanya</button> Page 3</li>
//       </NavBar>
//     {nameToShow === "Jaz" ? Jaz : tanya}
    
//      const Jaz <Header className="header-highlight" 
//       name="Jaz" 
//       color=" blue" 
//       fruit="blueberry" 
//       />
//      const Tanya <Header name="Tanya" color=" orange" fruit="orange" /> 
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
//       <Footer nickname="Jaz" />
//     </div>
//   );
// }

// export {App, Header, Footer};

