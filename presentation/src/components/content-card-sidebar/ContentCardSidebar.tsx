import React from 'react';
import './ContentCardSidebar.css';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
    path: string;
    name: string;
}

function ContentCardSidebar({sidebarEntries}: {sidebarEntries: SidebarProps[]}) {
    console.log(sidebarEntries);

    let createSidebarEntries = () => {
        return (sidebarEntries.map((entry) => (
            <React.Fragment key={entry.path}>
                <NavLink to={entry.path}>{entry.name}</NavLink>
                <div id="horizontal-line"></div>
            </React.Fragment>
        )));
    }

    return (
        <div className="sidebar">
            {createSidebarEntries()}
      </div>
    );
}

export default ContentCardSidebar;