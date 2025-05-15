import {useTranslation} from 'react-i18next';

const Projects = () => {
    const {t} = useTranslation();
    return (
        <div>
        <h2>{t("project")}</h2>
        </div>
    );
};

export default Projects;