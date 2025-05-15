import {useTranslation} from 'react-i18next';

const Intro = () => {

    const {t} = useTranslation();
    return (
        <div>
        <h2>{t('intro')}</h2>
        </div>
    );
    };

export default Intro;