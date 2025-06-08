import {useTranslation} from 'react-i18next';
import './Project.scss';
import FCC from "../assets/bg-items/free-code-camp.png";
import CI from "../assets/bg-items/CI.png";
import YS from "../assets/bg-items/yuspeak.png"

const Volunteer = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t("volunteer-title.freecodecamp_title"),
            date: t("volunteer-title.freecodecamp_date"),
            description: t("volunteer-title.freecodecamp_description"),
            img: FCC,
            link: "https://www.freecodecamp.org/japanese/news/author/charlotte-stone/"
        },
        {
            title: t("volunteer-title.codeinstitute-title"),
            date: t("volunteer-title.codeinstitute_date"),
            description: t("volunteer-title.codeinstitute_description"),
            img: CI,
            link: ""
        },
        {
            title: t("volunteer-title.yuspeak_title"),
            date: t("volunteer-title.yuspeak_date"),
            description: t("volunteer-title.yu_speak_description"),
            img: YS,
            link: ""
        },
    ];

    return (
        <div className="diagonal-scroll-wrapper">
            <div className="timeline-container">
                <h2 className="timeline-title">{t("volunteer")}</h2>
                <div className="timeline">
                    {projects.map((project, idx) => {
                        const isClickable = !!project.link;
                        const Wrapper = isClickable ? 'a' : 'div';
                        const wrapperProps = isClickable
                            ? { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "timeline-item" }
                            : { className: "timeline-item" };
                        return (
                            <Wrapper key={idx} {...wrapperProps}>
                                <div className="timeline-accent">
                                    {project.img && <img src={project.img} alt={project.title + ' logo'} />}
                                </div>
                                <div className="timeline-content">
                                    <span className="timeline-date">{project.date}</span>
                                    <h3 className="timeline-title">{project.title}</h3>
                                    <p className="timeline-description" dangerouslySetInnerHTML={{ __html: project.description }} />
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Volunteer;