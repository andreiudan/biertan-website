import './TownHallAdministration.css';
import EmployeePreview from '../employee-preview/EmployeePreview';

function TownHallAdministration() {
  const administration: {id: number, profilePicPath: string, employeeName: string, employeePosition: string}[] = [
    {
      id: 0,
      profilePicPath: '',
      employeeName: 'Mircea Dragomir',
      employeePosition: 'Primar',
    },
    {
      id: 1,
      profilePicPath: '',
      employeeName: 'Mircea Dragomir',
      employeePosition: 'Prima',
    },
    {
      id: 2,
      profilePicPath: '',
      employeeName: 'Mircea Dragomir',
      employeePosition: 'Prim',
    },
  ];

  function renderAdministrationPreview() {
    return (
      <div className="town-hall-administration-content">
        {administration.map((employee) => (
          <EmployeePreview
            key={employee.id}
            picturePath={employee.profilePicPath}
            name={employee.employeeName}
            position={employee.employeePosition}
          ></EmployeePreview>
        ))}
      </div>
    );
  }

  return <>{renderAdministrationPreview()}</>;
}

export default TownHallAdministration;
