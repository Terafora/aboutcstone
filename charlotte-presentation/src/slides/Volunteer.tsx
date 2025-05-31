import {useTranslation} from 'react-i18next';
import './Project.scss';
import FCC from "../assets/bg-items/free-code-camp.png";
import CI from "../assets/bg-items/CI.png";
import YS from "../assets/bg-items/yuspeak.png"

const projects = [
    {
        title: "English to Japanese Technical Translator - FreeCodeCamp",
        date: "2024 - Current",
        description: 'I help translate tutorial articles which provide free programming education to Japanese speakers',
        img: FCC,
        link: "https://www.freecodecamp.org/japanese/news/author/charlotte-stone/"
    },
    {
        title: "Technology Lead - Code Institute",
        date: "2023 - 2024",
        description: "A channel lead on providing assistance to other students going through various full-stack software courses.",
        img: CI,
        link: ""
    },
    {
        title: "Japanese to English Translator - YuSpeak / HelloChinese",
        date: "2021 - 2022",
        description: "Helped translate text for a language learning Application",
        img: YS,
        link: ""
    },
];

const Volunteer = () => {
    const { t } = useTranslation();
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