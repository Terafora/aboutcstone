import {useTranslation} from 'react-i18next';
import './WhyIT.scss'

const WhyIT = () => {
  const {t} = useTranslation();
  return (
    <section>
      <h1> </h1>
      <ul className="reasons">
        <li>{t('slide-2.reason1')}</li>
        <li>{t('slide-2.reason2')}</li>
        <li>{t('slide-2.reason3')}</li>
        <li>{t('slide-2.reason4')}</li>
        <li>{t('slide-2.reason5')}</li>
      </ul>
    </section>
  );
};

export default WhyIT;