import './EmployeePreview.css';
import defaultProfilePicture from '../../assets/images/profile.png';
import { useTranslation } from 'react-i18next';

interface EmployeeProps {
  name: string;
  position: string;
  picturePath?: string;
}

function EmployeePreview({ name, position, picturePath }: EmployeeProps) {
  const setNamespace = (): string => {
    switch (position) {
      case 'Primar':
        return 'mayor';

      case 'Viceprimar':
        return 'deputy-mayor';

      case 'Secretar General':
        return 'general-secretary';

      default:
        return 'mayor';
    }
  };

  let namespace = setNamespace();
  const { t } = useTranslation([namespace]);

  return (
    <>
      <img
        className="employee-picture"
        src={picturePath === '' ? defaultProfilePicture : picturePath}
        alt="employee-picture"
      ></img>
      <p className="employee-name">{name}</p>
      <p className="employee-position">{t('title')}</p>
    </>
  );
}

export default EmployeePreview;
