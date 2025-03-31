import './TownHallAdministration.css';
import EmployeePreview from '../employee-preview/EmployeePreview';

function TownHallAdministration() {
  const administration = [
    {
      profilePicPath: 0,
      employeeName: 'Mircea Dragomir',
      employeePosition: 'Primar',
    },
    {
      profilePicPath: 0,
      employeeName: 'Mircea Dragomir',
      employeePosition: 'Prima',
    },
    {
      profilePicPath: 0,
      employeeName: 'Mircea Dragomir',
      employeePosition: 'Prim',
    },
  ];

  function renderAdministrationPreview() {
    return (
      <div className="town-hall-administration-content">
        {administration.map((employee) => (
          <EmployeePreview
            key={employee}
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
