import './TownHall.css';
import Background from '../../assets/images/Primarie.png';
import ContentCard from '../../components/content-card/ContentCard';

function TownHall() {
  const townHallNavigation: {path: string, name: string}[] = [
    {
      path: '/primarie',
      name: 'Administratie'
    },
    {
      path: 'organigrama',
      name: 'Organigrama'
    },
    {
      path: 'stare-civila',
      name: 'Stare Civila'
    }
  ];

  return (
    <div className="town-hall-content">
      <div className="town-hall-background">
        <img src={Background} alt="background"></img>
      </div>

      <ContentCard sidebarProps={townHallNavigation}></ContentCard>
    </div>
  );
}

export default TownHall;
