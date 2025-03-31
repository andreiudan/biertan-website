import React from 'react';
import './App.css';
import Footer from './layouts/footer/Footer.tsx';
import Header from './layouts/header/Header.tsx';
import Home from './pages/home/Home.tsx';
import TownHall from './pages/town-hall/TownHall.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
      
        <div className='App-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/primarie' element={<TownHall />} />
          </Routes>
        </div>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
