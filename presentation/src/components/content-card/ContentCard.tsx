import './ContentCard.css';
import { Route, Routes } from 'react-router-dom';
import TownHallAdministration from '../town-hall-administration/TownHallAdministration';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import ContentCardSidebar from '../content-card-sidebar/ContentCardSidebar';

interface SidebarProps {
  path: string, 
  name: string
}

function ContentCard({ sidebarProps }: { sidebarProps: SidebarProps[] }) {
  return (
    <div className="card">
      <ContentCardSidebar sidebarEntries={sidebarProps}/>

      <div className="card-content">
        <Breadcrumb />

        <Routes>
          <Route path="/" element={<TownHallAdministration />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default ContentCard;
