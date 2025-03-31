import './ContentCard.css';
import { NavLink } from 'react-router-dom';

function ContentCard() {
  return (
    <div className="card">
      <div className="sidebar">
        <NavLink>Administratie</NavLink>
        <div className="sidebar-buttons-separator"></div>
      </div>

      <div className="content"></div>
    </div>
  );
}

export default ContentCard;
