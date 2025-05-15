import {useTranslation} from 'react-i18next';

const WhyIT = () => {
  const {t} = useTranslation();
  return (
    <div>
      <h2>{t('why_it')}</h2>
    </div>
  );
};

export default WhyIT;