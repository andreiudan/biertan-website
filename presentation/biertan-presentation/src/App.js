import './App.css';
import Footer from './layouts/footer/footer';
import Header from './layouts/header/header';
import Home from './pages/home/home';

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
