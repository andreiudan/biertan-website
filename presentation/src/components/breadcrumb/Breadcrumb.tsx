import './Breadcrumb.css';
import { useLocation, NavLink } from 'react-router';

const definedLocations: {path: string, name: string}[] = [{
    path: '/',
    name: 'Acasa'
},
{
    path: '/primarie',
    name: 'Primarie'
},
{
    path: '/organigrama',
    name: 'Organigrama'
},
{
    path: '/stare-civila',
    name: 'Stare Civila'
}];

function Breadcrumb() {
    const location = useLocation().pathname;

    let createBreadcrumbDynamically = () => {
        let locations: string[] = location.split('/');

        if(locations[locations.length-1] === ''){
            locations.pop();
        }

        return (locations.map((loc) => (
            <NavLink key={loc} className='breadcrumb-entry' to={'/' + loc}>{definedLocations.find(x => x.path === '/' + loc)?.name}</NavLink>
        )));
    }

    return (
        <nav aria-label='breadcrumb' className='breadcrumb'>
            {createBreadcrumbDynamically()}
        </nav>
    );
}

export default Breadcrumb;