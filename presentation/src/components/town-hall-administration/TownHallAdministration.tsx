import './TownHallAdministration.css';
import EmployeePreview from '../employee-preview/EmployeePreview';
import { Link } from 'react-router';

const administration: {
  id: number;
  picturePath?: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  audience_program: { day: string; startTime: string; endTime: string }[];
}[] = [
  {
    id: 0,
    picturePath: '',
    name: 'Mircea Dragomir',
    position: 'Primar',
    phone: '0269868359',
    email: 'mirceaprimariabiertan@gmail.com',
    audience_program: [
      {
        day: 'tuesday',
        startTime: '9:00',
        endTime: '13:00',
      },
      {
        day: 'thursday',
        startTime: '9:00',
        endTime: '13:00',
      },
    ],
  },
  {
    id: 1,
    picturePath: '',
    name: 'Ioan Florea',
    position: 'Viceprimar',
    phone: '0269868359',
    email: 'primariabiertan@yahoo.com',
    audience_program: [
      {
        day: 'monday',
        startTime: '9:00',
        endTime: '13:00',
      },
      {
        day: 'wednesday',
        startTime: '9:00',
        endTime: '13:00',
      },
    ],
  },
  {
    id: 2,
    picturePath: '',
    name: 'Chișu Aurelia',
    position: 'Secretar General',
    phone: '0269868359',
    email: 'primariabiertan@yahoo.com',
    audience_program: [
      {
        day: 'monday',
        startTime: '8:00',
        endTime: '12:00',
      },
      {
        day: 'thursday',
        startTime: '8:00',
        endTime: '12:00',
      },
    ],
  },
];

const renderAdministrationPreview = () => {
  return administration.map((employee) => (
    <Link
      key={employee.id}
      to={employee.position}
      state={{ employee: employee }}
      className="employee-preview"
    >
      <EmployeePreview
        picturePath={employee.picturePath}
        name={employee.name}
        position={employee.position}
      ></EmployeePreview>
    </Link>
  ));
};

function TownHallAdministration() {
  return (
    <div className="town-hall-administration-content">
      {renderAdministrationPreview()}
    </div>
  );
}

export default TownHallAdministration;
