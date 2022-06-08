import './App.css';
import Navbar from './components/navbar';


const url = 'https://fakestoreapi.com/products'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h4>Fetch data with Axios</h4>
    </div>
  );
}

export default App;
