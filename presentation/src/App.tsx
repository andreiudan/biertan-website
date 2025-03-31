import React from 'react';
import './App.css';
import Footer from './layouts/footer/footer.tsx';
import Header from './layouts/header/header.tsx';
import Home from './pages/home/Home.tsx';

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
