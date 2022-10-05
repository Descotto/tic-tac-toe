import logo from './logo.svg';
import './App.css';
import Game from './Game';


function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div id="errors"></div>
      <div id="root"></div>
<Game />

    </div>
  );
}

export default App;
