import React from 'react';
import './TownHall.css';
import Background from '../../assets/images/Primarie.png';
import ContentCard from '../../components/content-card/ContentCard.tsx';

function TownHall() {
  return (
    <div className="town-hall-content">
      <div className="town-hall-background">
        <img src={Background} alt="background"></img>
      </div>

      <ContentCard></ContentCard>
    </div>
  );
}

export default TownHall;
