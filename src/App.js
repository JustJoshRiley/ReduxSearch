import './App.css';
import Results from './Components/Results';
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <div className="App">
      <div className='Search-Container'>
        <SearchForm />
      </div>
      <div className='Results-Container'>
        <Results />
      </div>
    </div>
  );
}

export default App;
