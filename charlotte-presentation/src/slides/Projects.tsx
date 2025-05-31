import {useTranslation} from 'react-i18next';
import './Project.scss'
import PEVImg from '../assets/bg-items/PEV.png';
import YS from '../assets/bg-items/yomisaverb.png';
import MMT from '../assets/bg-items/my_mix_tape_logo.svg'

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "LangBloom",
            date: "2025",
            description: t("slide3.lbdesc"),
            img: "",
            link: ""
        },
        {
            title: "Project Exit Velocity",
            date: "2024 - 2025",
            description: t("slide3.pevdesc"),
            img: PEVImg,
            link: "https://project-exit-velocity-blog.vercel.app"
        },
        {
            title: "YomiSaver",
            date: "2024",
            description: t("slide3.ysdesc"),
            img: YS,
            link: "https://github.com/Terafora/Yomisaver-Free"
        },
        {
            title: "My Mixtape",
            date: "2022",
            description: t("slide3.mmdesc"),
            img: MMT,
            link: "https://my-mix-tapes-a7ee13848429.herokuapp.com"
        },   
    ];

    return (
        <div className="diagonal-scroll-wrapper">
            <div className="timeline-container">
                <h2 className="timeline-title">{t("projects")}</h2>
                <div className="timeline">
                    {projects.map((project, idx) => (
                        project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            className="timeline-item"
                            key={idx}
                            rel="noopener noreferrer"
                          >
                            <div className="timeline-accent">
                              {project.img && <img src={project.img} alt={project.title + ' logo'} />}
                            </div>
                            <div className="timeline-content">
                              <span className="timeline-date">{project.date}</span>
                              <h3 className="timeline-title">{project.title}</h3>
                              <p className="timeline-description" dangerouslySetInnerHTML={{ __html: project.description }} />
                            </div>
                          </a>
                        ) : (
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
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Projects;