import './ContentCard.css';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import ContentCardSidebar from '../content-card-sidebar/ContentCardSidebar';
import { ReactNode } from 'react';

interface SidebarProps {
  path: string;
  name: string;
}

interface Props {
  sidebarProps: SidebarProps[];
  children: ReactNode;
}

function ContentCard({ sidebarProps, children }: Props) {
  return (
    <div className="card">
      <ContentCardSidebar sidebarEntries={sidebarProps} />

      <div className="card-content">
        <Breadcrumb />

        {children}
      </div>
    </div>
  );
}

export default ContentCard;
