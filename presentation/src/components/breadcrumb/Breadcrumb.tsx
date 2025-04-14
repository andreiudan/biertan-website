import React from 'react';
import './Breadcrumb.css';
import { useLocation, NavLink } from 'react-router';

const definedLocations: { path: string; name: string }[] = [
  {
    path: '/',
    name: 'Acasa',
  },
  {
    path: '/primarie',
    name: 'Primarie',
  },
  {
    path: '/organigrama',
    name: 'Organigrama',
  },
  {
    path: '/stare-civila',
    name: 'Stare Civila',
  },
  {
    path: '/administratie',
    name: 'Administratie',
  },
  {
    path: '/descriere-post',
    name: 'Descriere',
  },
];

function Breadcrumb() {
  const location = useLocation().pathname;
  let locations: string[] = location.split('/');

  const createBreadcrumbDynamically = () => {
    let path: string = '';

    if (locations[locations.length - 1] === '') {
      locations.pop();
    }

    return locations.map((loc) => (
      <React.Fragment key={loc}>
        <NavLink
          className="breadcrumb-entry"
          to={(path += loc === '' ? '' : '/' + loc)}
        >
          {definedLocations.find((x) => x.path === '/' + loc)?.name}
        </NavLink>
      </React.Fragment>
    ));
  };

  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      {createBreadcrumbDynamically()}
    </nav>
  );
}

export default Breadcrumb;
