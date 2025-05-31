import {useTranslation} from 'react-i18next';
import './Project.scss';
import JT from '../assets/bg-items/JT.jpg';
import CAP from '../assets/bg-items/capgemini.png';
import ADM from '../assets/bg-items/admiral_group_plc_logo.jpg';

const Work = () => {
    const { t } = useTranslation();
    const work = [
        {
            title: t("slide4.admiral_job_title"),
            date: "2022 - 2023",
            description: t("slide4.admiral_job_description"),
            img: ADM,
            link: ""
        },
        {
            title: t("slide4.joytalk_job_title"),
            date: "2018 -2020",
            description: t("slide4.joytalk_job_description"),
            img: JT,
            link: ""
        },
        {
            title: t("slide4.capgemini_job_title"),
            date: "2011 - 2016",
            description: t("slide4.capgemini_job_description"),
            img: CAP,
            link: ""
        }
    ];
    return (
        <div className="diagonal-scroll-wrapper">
            <div className="timeline-container">
                <h2 className="timeline-title">{t("work_history")}</h2>
                <div className="timeline">
                    {work.map((work, idx) => (
                        <div className="timeline-item" key={idx}>
                            <div className="timeline-accent">
                              {work.img && <img src={work.img} alt={work.title + ' logo'} />}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">{work.date}</span>
                                <h3 className="timeline-title">{work.title}</h3>
                                <p className="timeline-description" dangerouslySetInnerHTML={{ __html: work.description }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Work;