import {useTranslation, Trans} from 'react-i18next';

const Final = () => {
  const {t} = useTranslation();
  return (
    <div>
      <h2>{t("final")}</h2>
    </div>
  );
};

export default Final;