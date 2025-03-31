import React from 'react';
import './EmployeePreview.css';
import defaultProfilePicture from '../../assets/images/profile.png';

function EmployeePreview({ name, position, picturePath }) {
  return (
    <div className="employee-preview">
      <img
        className="employee-picture"
        src={defaultProfilePicture}
        alt="employee-picture"
      ></img>
      <p className="employee-name">{name}</p>
      <p className="employee-position">{position}</p>
    </div>
  );
}

export default EmployeePreview;
