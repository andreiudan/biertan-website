import React from 'react';
import './App.css';
import Footer from './layouts/footer/footer';
import Header from './layouts/header/header';
import Home from './pages/home/Home';
import TownHall from './pages/town-hall/TownHall';
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
