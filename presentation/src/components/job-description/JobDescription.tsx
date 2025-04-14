import './JobDescription.css';
import EmployeeDescription from '../employee-description/EmployeeDescription';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

interface EmployeeProps {
  name: string;
  position: string;
  picturePath?: string;
  phone: string;
  email: string;
  audience_program: { day: string; startTime: string; endTime: string }[];
}

function JobDescription() {
  const checkTranslationNamespace = (): string => {
    let locations = location.pathname.split('/');

    switch (locations[locations.length - 1]) {
      case 'Primar':
        return 'mayor';

      case 'Viceprimar':
        return 'deputy-mayor';

      case 'Secretar%20General':
        return 'general-secretary';

      default:
        return 'mayor';
    }
  };

  const location = useLocation();
  const employee: EmployeeProps = location.state.employee;
  let namespace = checkTranslationNamespace();

  const { t } = useTranslation([namespace]);

  return (
    <div className="job-description">
      <div className="job-details">
        <h2 className="job-name">{t('title')}</h2>
        <p>{t('description')}</p>

        {namespace === 'mayor' && (
          <>
            <h3>{t('job_specific_1_title')}</h3>
            <p>{t('main_attributes')}</p>

            <h3>{t('job_specific_2_title')}</h3>
            <p>{t('end_of_term_cases')}</p>
          </>
        )}
      </div>

      <div className="employee-informations">
        <div className="separator-line"></div>

        <EmployeeDescription
          name={employee.name}
          position={employee.position}
          picturePath={employee.picturePath}
          phone={employee.phone}
          email={employee.email}
          audience_program={employee.audience_program}
        ></EmployeeDescription>
      </div>
    </div>
  );
}

export default JobDescription;
