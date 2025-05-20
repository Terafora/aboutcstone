import {useTranslation} from 'react-i18next';
import './Intro.scss'

const Intro = () => {

    const {t} = useTranslation();
    return (
        <div>
        <h1 className="title">{t('intro')}</h1>
        <h2 className="subtitle">{t('sub-header')}</h2>
        </div>
    );
    };

export default Intro;