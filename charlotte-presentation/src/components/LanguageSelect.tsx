import { useTranslation } from 'react-i18next';
import './LanguageSelect.scss';

const LanguageSelect = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="language-selector">
            <select
                id="language-select"
                onChange={handleLanguageChange}
                defaultValue={i18n.language}
            >
                <option value="en">🇬🇧</option>
                <option value="es">🇪🇸</option>
                <option value="fr">🇫🇷</option>
                <option value="jp">🇯🇵</option>
                <option value="de">🇩🇪</option>
                <option value="pt">🇵🇹</option>
            </select>
        </div>
    );
};

export default LanguageSelect;