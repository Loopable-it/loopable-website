import logo from './assets/logo.svg'
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"></img>
        <p>Coming soon...</p>
      </div>
    </>
  );
}

export default App;
