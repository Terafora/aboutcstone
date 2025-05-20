import {useTranslation} from 'react-i18next';

const WhyIT = () => {
  const {t} = useTranslation();
  return (
    <div>
      <h1>{t('why_it')}</h1>
      
    </div>
  );
};

export default WhyIT;