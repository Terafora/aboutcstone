import {useTranslation} from 'react-i18next';
import './Project.scss'

const projects = [
    {
        title: "Project Alpha",
        date: "2024",
        description: "Description of Project Alpha."
    },
    {
        title: "Project Beta",
        date: "2023",
        description: "Description of Project Beta."
    },
    {
        title: "Project Gamma",
        date: "2022",
        description: "Description of Project Gamma."
    },
    {
        title: "Project Gamma",
        date: "2022",
        description: "Description of Project Gamma."
    },
    {
        title: "Project Gamma",
        date: "2022",
        description: "Description of Project Gamma."
    },
    {
        title: "Project Gamma",
        date: "2022",
        description: "Description of Project Gamma."
    }
    
];

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className="diagonal-scroll-wrapper">
            <div className="timeline-container">
                <h2 className="timeline-title">{t("projects")}</h2>
                <div className="timeline">
                    {projects.map((project, idx) => (
                        <div className="timeline-item" key={idx}>
                            <div className="timeline-accent" />
                            <div className="timeline-content">
                                <span className="timeline-date">{project.date}</span>
                                <h3 className="timeline-title">{project.title}</h3>
                                <p className="timeline-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Projects;