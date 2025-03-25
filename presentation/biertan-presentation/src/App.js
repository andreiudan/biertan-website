import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
