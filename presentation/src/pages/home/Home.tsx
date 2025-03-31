import React from 'react';
import './home.css';
import background from '../../assets/images/Biertan.jpg';

function Home() {
  return (
    <>
      <div className="home-background">
        <img src={background} alt="background"></img>
      </div>

      <div className="shortcuts">
        <div className="shortcut-button">
          <div className="button-icon"></div>

          <p>Evenimente</p>
        </div>

        <div className="shortcut-button">
          <div className="button-icon"></div>

          <p>Noutati</p>
        </div>

        <div className="shortcut-button">
          <div className="button-icon"></div>

          <p>Atractii</p>
        </div>

        <div className="shortcut-button">
          <div className="button-icon"></div>

          <p>Plati online</p>
        </div>

        <div className="shortcut-button">
          <div className="button-icon"></div>

          <p>Plati online</p>
        </div>

        <div className="shortcut-button">
          <div className="button-icon"></div>

          <p>Plati online</p>
        </div>
      </div>
    </>
  );
}

export default Home;
