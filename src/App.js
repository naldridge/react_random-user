import Usercard from './components/Usercard';
import './App.css';

function App() {
  return (
    <div className="App">
    <h2>Users: </h2>
    <div className="CardRow">
    <Usercard />
    <Usercard />
    </div>
    <div className="CardRow">
    <Usercard />
    <Usercard />
    </div>
    </div>
  );
}

export default App;
