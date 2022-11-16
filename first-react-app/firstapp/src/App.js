import logo from './logo.svg';
import './App.css';


function Header (props) {
  const {name, color, fruit, className} = props;
  return (
  <h1 className={className}>
    {name} is{color} like a {fruit}
  </h1>
  );
}

function Footer ({nickname}) {
  return (
  <div>
    <h2>Ciao for now {nickname}</h2> 
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header className="header-highlight" name="Jaz" color=" blue" fruit="blueberry" />
      {/* <Header name="Tanya" color=" orange" fruit="orange" /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer nickname="Jaz" />
    </div>
  );
}

export default App;
