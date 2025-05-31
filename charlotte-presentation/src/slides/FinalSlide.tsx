import { useTranslation, Trans } from 'react-i18next';
import './FinalSlide.scss';

const Final = () => {
  const { t } = useTranslation();
  return (
    <div className="final">
      <h2>
        <Trans i18nKey="final">
          Let's Build Something <span className="pulse">Meaningful</span>
        </Trans>
      </h2>
    </div>
  );
};

export default Final;