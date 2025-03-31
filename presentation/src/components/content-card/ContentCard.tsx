import './ContentCard.css';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import TownHallAdministration from '../town-hall-administration/TownHallAdministration';

function ContentCard() {
  return (
    <div className="card">
      <div className="sidebar">
        <NavLink to="/primarie">Administratie</NavLink>
        <div id="horizontal-line"></div>
        <NavLink to="/">Organigrama</NavLink>
        <div id="horizontal-line"></div>
        <NavLink to="/">Stare Civila</NavLink>
        <div id="horizontal-line"></div>
      </div>

      <div className="card-content">
        <div className="current-path">
          <NavLink to="/">Acasa</NavLink>
          <NavLink to="/primarie">Primarie</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<TownHallAdministration />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default ContentCard;
