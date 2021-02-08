import { Launches } from "./components";

// Assets
import logo from "./assets/logo.png";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h3 className="App-heading">Launches</h3>
        <div className="App-results-wrapper">
          <Launches className="App-list" />
        </div>
      </header>
    </div>
  );
};

export default App;
