import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <h4>Products</h4>
      <Products/>
    </div>
  );
}

export default App;
