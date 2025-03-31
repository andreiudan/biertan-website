import './header.css';
import logo from './../../assets/images/StemaBiertan_smaller80.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logoName">
        <img className="logoHeader" src={logo} alt="logo"></img>
        <p className="primaryName">Biertan</p>
      </NavLink>

      <div className="navigation">
        <NavLink to="/primarie">
          <p>Primarie</p>
        </NavLink>
        <p>Acomodare</p>
        <p>Localnici</p>
        <p>Vizitatori</p>
        <p>Contact</p>
      </div>

      <div className="languages">
        <p>Romana</p>
        <div id="verticalLine"></div>
        <p>English</p>
        <div id="verticalLine"></div>
        <p>Deutsch</p>
      </div>
    </header>
  );
}

export default Header;
