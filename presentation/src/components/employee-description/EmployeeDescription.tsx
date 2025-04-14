import './EmployeeDescription.css';
import EmployeePreview from '../employee-preview/EmployeePreview';
import phoneIcon from '../../assets/images/phone.png';
import emailIcon from '../../assets/images/email.png';
import { useTranslation } from 'react-i18next';

interface EmployeeProps {
  name: string;
  position: string;
  picturePath?: string;
  phone: string;
  email: string;
  audience_program: { day: string; startTime: string; endTime: string }[];
}

function EmployeeDescription({
  name,
  position,
  picturePath,
  phone,
  email,
  audience_program,
}: EmployeeProps) {
  const { t } = useTranslation(['common']);

  return (
    <div className="employee-description">
      <EmployeePreview
        name={name}
        position={position}
        picturePath={picturePath}
      />

      <div className="info-entry">
        <img src={emailIcon} alt="email"></img>
        <p>{email}</p>
      </div>

      <div className="info-entry">
        <img src={phoneIcon} alt="phone"></img>
        <p>{phone}</p>
      </div>

      <div className="available-times">
        <p className="available-times-header">{t('audience_program')}:</p>
        <div className="hour-and-time">
          {audience_program?.map((program) => {
            return (
              <p key={program.day}>
                {t(program.day)}, {program.startTime} - {program.endTime}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDescription;
