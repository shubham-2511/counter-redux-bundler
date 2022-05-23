import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Todo />
      </header>
    </div>
  );
}

export default App;
