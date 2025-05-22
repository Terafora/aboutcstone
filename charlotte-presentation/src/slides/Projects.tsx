import {useTranslation} from 'react-i18next';
import './Project.scss'

const Projects = () => {
    const {t} = useTranslation();
    return (
        <div>
        <h2>{t("projects")}</h2>
        </div>
    );
};

export default Projects;