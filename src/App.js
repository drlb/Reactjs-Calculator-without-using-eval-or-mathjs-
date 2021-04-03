import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <br/>
      <h5 className="credits">Created By <a href="https://github.com/drlb/">drlb</a> &<a href="https://github.com/maor9505/">Maor9505</a></h5>
    </div>
  );
}

export default App;
