import {useTranslation} from 'react-i18next';
import './LanguageSelect.scss';

const LanguageSelect = () => {
    const {t, i18n} = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className = "language-selector">
            <label htmlFor="language-select">{t("language")}: </label>
            <select id ="language-select" onChange={handleLanguageChange} defaultValue={i18n.language}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="jp">日本語</option>
                <option value="de">Deutsch</option>
                <option value="pt">Português</option>
            </select>
        </div>
    )
}

export default LanguageSelect