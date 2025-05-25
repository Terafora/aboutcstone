import {useTranslation} from 'react-i18next';
import './Project.scss';
import JT from '../assets/bg-items/JT.jpg';
import CAP from '../assets/bg-items/capgemini.png';
import ADM from '../assets/bg-items/admiral_group_plc_logo.jpg';

const work = [
    {
        title: "Customer Loyalty Representative - Admiral Group",
        date: "2022 - 2023",
        description: 'I assisted customers with insurance queries and aimed to retain customers who were looking to leave the service.',
        img: ADM,
        link: ""
    },
    {
        title: "English Language Teacher",
        date: "2018 -2020",
        description: "I taught English across multiple schools in the Japanese countryside.",
        img: JT,
        link: ""
    },
    {
        title: "Software Engineer - Capgemini",
        date: "2011 - 2016",
        description: "I assisted end users with their technical issues as well as helped setup and maintain systems.",
        img: CAP,
        link: ""
    }
];

const Work = () => {
    const { t } = useTranslation();
    return (
        <div className="diagonal-scroll-wrapper">
            <div className="timeline-container">
                <h2 className="timeline-title">{t("work history")}</h2>
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