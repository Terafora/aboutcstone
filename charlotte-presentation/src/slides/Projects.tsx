import {useTranslation, Trans} from 'react-i18next';

const Projects = () => {
    const {t} = useTranslation();
    return (
        <div>
        <h2>{t("projects")}</h2>
        </div>
    );
};

export default Projects;