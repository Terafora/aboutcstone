import {useTranslation, Trans} from 'react-i18next';
import './Intro.scss'

const Intro = () => {

    const {t} = useTranslation();
    return (
        <section className="slide-section slide-section--intro">
            <h1 className="title">{t('intro')}</h1>
            <h2 className="subtitle"><Trans i18nKey="sub-header" /></h2>
        </section>
    );
    };

export default Intro;