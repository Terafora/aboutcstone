import {useTranslation} from 'react-i18next';
import './Phoenix.scss'

const Phoenix = () => {
  const {t} = useTranslation()
  return (
    <div>
      <h2>{t("phoenix")}</h2>
      
    </div>
  );
};

export default Phoenix;