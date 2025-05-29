import {useTranslation} from 'react-i18next';
import './WhyIT.scss'

const Phoenix = () => {
  const {t} = useTranslation();
  return (
    <section>
      <h1> </h1>
      <ul className="reasons">
        <li>{t('slide6.reason1')}</li>
        <li>{t('slide6.reason2')}</li>
        <li>{t('slide6.reason3')}</li>
        <li>{t('slide6.reason4')}</li>
        <li>{t('slide6.reason5')}</li>
      </ul>
    </section>
  );
};

export default Phoenix;