import './Header.css';
import logo from './../../assets/images/StemaBiertan_smaller80.png';
import { NavLink } from 'react-router';
import i18next from 'i18next';

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
        <p
          onClick={() => {
            i18next.changeLanguage('ro');
          }}
        >
          Romana
        </p>
        <div id="verticalLine"></div>
        <p
          onClick={() => {
            i18next.changeLanguage('en');
          }}
        >
          English
        </p>
        <div id="verticalLine"></div>
        <p
          onClick={() => {
            i18next.changeLanguage('de');
          }}
        >
          Deutsch
        </p>
      </div>
    </header>
  );
}

export default Header;
