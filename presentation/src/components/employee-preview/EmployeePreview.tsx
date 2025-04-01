import './EmployeePreview.css';
import defaultProfilePicture from '../../assets/images/profile.png';
import { Link } from 'react-router-dom';

interface EmployeePreviewProps {
  name: string;
  position: string;
  picturePath?: string; 
}

function EmployeePreview({ name, position, picturePath }: EmployeePreviewProps) {
  return (

    <Link to='/angajat' className="employee-preview">
      <img
        className="employee-picture"
        src={defaultProfilePicture}
        alt="employee-picture"
      ></img>
      <p className="employee-name">{name}</p>
      <p className="employee-position">{position}</p>
    </Link>
  );
}

export default EmployeePreview;
