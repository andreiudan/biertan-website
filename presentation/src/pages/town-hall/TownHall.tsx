import { Outlet } from 'react-router';
import './TownHall.css';
import ContentCard from '../../components/content-card/ContentCard';

const jobTypes: { path: string; name: string }[] = [
  {
    path: '/primar',
    name: 'Primar',
  },
  {
    path: '/viceprimar',
    name: 'Viceprimar',
  },
  {
    path: '/secretar-general',
    name: 'Secretar General',
  },
];

const townHallNavigation: { path: string; name: string }[] = [
  {
    path: 'administratie',
    name: 'Administratie',
  },
  {
    path: 'organigrama',
    name: 'Organigrama',
  },
  {
    path: 'stare-civila',
    name: 'Stare Civila',
  },
];

function TownHall() {
  return (
    <div className="town-hall-content">
      <ContentCard sidebarProps={townHallNavigation}>
        <Outlet />
      </ContentCard>
    </div>
  );
}

export default TownHall;
