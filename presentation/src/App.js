import './App.css';
import Footer from './layouts/footer/Footer';
import Header from './layouts/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <div className='App-content'>
        <Home></Home>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
