import {useTranslation} from 'react-i18next';
import './Project.scss'
import PEVImg from '../assets/bg-items/PEV.png';
import YS from '../assets/bg-items/yomisaverb.png';
import MMT from '../assets/bg-items/my_mix_tape_logo.svg'

const projects = [
    {
        title: "LangBloom",
        date: "2025",
        description: 'A full-stack SaaS for assisting with the admin side of language teaching. <br/> Currently a WIP so link withheld.<br/>React, TypeScript,PWA,Nhost (A very AI assisted project)',
        img: "",
        link: ""
    },
    {
        title: "Project Exit Velocity",
        date: "2024 - 2025",
        description: "A full-stack MERN blog for sharing progress on personal projects and learning.<br/>MERN, JWT, Typsecript",
        img: PEVImg,
        link: "https://github.com/Terafora/project-exit-velocity-blog"
    },
    {
        title: "YomiSaver",
        date: "2024",
        description: "A Chrome extension for simplifying the learning process for Japanese.<br/>HTML, CSS, Vanilla JavaScript",
        img: YS,
        link: "https://github.com/Terafora/Yomisaver-Free"
    },
    {
        title: "My Mixtape",
        date: "2022",
        description: "A full-stack site for creating and sharing mixtapes to share with others.<br/>Python, Django",
        img: MMT,
        link: "https://my-mix-tapes-a7ee13848429.herokuapp.com"
    },   
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
                            <div className="timeline-accent">
                              {project.img && <img src={project.img} alt={project.title + ' logo'} />}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">{project.date}</span>
                                <h3 className="timeline-title">{project.title}</h3>
                                <p className="timeline-description" dangerouslySetInnerHTML={{ __html: project.description }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Projects;