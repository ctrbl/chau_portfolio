'use client'

import StarIcon from './StarIcon';
import { downloadResume } from './Home';
import { experience, skills } from '../lib/data';

function About() {
    return (
        <section id="about" className="inner about">
        {/* <!-- About Section Start --> */}
            {/* <!-- Content Block - H2 Section Title Start --> */}
            <div className="content__block section-grid-title">
            <p className="h2__subtitle animate-in-up">
                <StarIcon/>
                <span>About Me</span>
            </p>
            <h2 className="h2__title animate-in-up">A Passionate & Dedicated Problem-Solver</h2>
            </div>
            {/* <!-- Content Block - H2 Section Title End --> */}

            {/* <!-- Content Block - Achievements Start --> */}
            <div className="content__block grid-block">
            <div className="achievements d-flex flex-column flex-md-row align-items-md-stretch">
                {/* <!-- achievements single items --> */}
                {experience.map((item, _) =>
                    <div className="achievements__item d-flex flex-column grid-item animate-card-3">
                        <div className="achievements__card">
                            {/* <p className={`achievements__descr ${item.symbol}`}></p> */}
                            <p className="achievements__descr" style={{fontSize:"24px"}}>{item.symbol}</p>
                            <p className="achievements__number">{item.number}</p>
                            <p className="achievements__descr">{item.name}</p>
                        </div>
                    </div>
                )}
            </div>
            </div>
            {/* <!-- Content Block - Achievements End --> */}

            {/* <!-- Content Block - About Me Data Start --> */}
            <div className="content__block grid-block block-large">
            <div className="container-fluid p-0">
                <div className="row g-0 justify-content-between">
                
                {/* <!-- About Me Description Start --> */}
                <div className="col-12 col-xl-8 grid-item about-descr">
                    <p className="about-descr__text animate-in-up">
                    Graduated with a <a href="#0" className="text-link">B.S. in Computer Science</a> in December 2023, I'm currently pursuing a <a href="#0" className="text-link">M.S. in Computer Science </a>
                    specializing in Machine Learning at USF. I will soon be transferring to the <a href="https://omscs.gatech.edu/" className="text-link" target="_blank" rel="noopener noreferrer">OMSCS program at Georgia Tech</a> in Fall 2024. 
                    With this flexibility, I'm currently looking for a full-time entry-level SWE position.
                    </p>
                    <p className="about-descr__text animate-in-up">
                    Throughout my academic journey, undergraduate research assistance, internship, and hackathons participation, I have gained robust expertise in <a href="#0" className="text-link">full-stack software development </a> 
                    utilizing modern technologies like MERN stack, Angular, Next.js, TypeScript, MySQL, AWS, Swift, and more. 
                    </p>
                    <p className="about-descr__text animate-in-up">
                    Driven by a passion for <a href="#0" className="text-link">AI/ML</a>, I aspire to become a software engineer that develops innovative solutions that seamlessly integrate 
                    AI technologies into real-world applications, enhancing user experience and streamlining everyday life.
                    </p>
                    <div className="btn-group about-descr__btnholder animate-in-up">
                    <div className="btn mobile-vertical btn-default btn-hover btn-hover-accent">
                        <span className="btn-caption" onClick={downloadResume}>Download CV</span>
                        <i className="ph-bold ph-download-simple"></i>
                    </div>
                    </div>
                </div>
                {/* <!-- About Me Description End -->
        
                <!-- About Me Information Start --> */}
                <div className="col-12 col-xl-4 grid-item about-info">
                    <div className="about-info__item animate-in-up">
                    <h6>
                        <small className="top">Name</small>
                        Chau Nguyen
                    </h6>
                    </div>
                    <div className="about-info__item animate-in-up">
                    <h6>
                        <small className="top">Phone</small>
                        <a className="text-link-bold" href="tel:+12127089400">+1 813-367-6834</a>
                    </h6>
                    </div>
                    <div className="about-info__item animate-in-up">
                    <h6>
                        <small className="top">Email</small>
                        <a className="text-link-bold" href="mailto:minhchau.ng1028@gmail.com">minhchau.ng1028@gmail.com</a>
                    </h6>
                    </div>
                    <div className="about-info__item animate-in-up">
                    <h6>
                        <small className="top">LinkedIn</small>
                        <a className="text-link-bold" href="https://linkedin.com/in/ctrbl/" target="_blank" rel="noreferrer">linkedin.com/in/ctrbl/</a>
                    </h6>
                    </div>
                    <div className="about-info__item animate-in-up">
                    <h6>
                        <small className="top">GitHub</small>
                        <a className="text-link-bold" href="https://github.com/ctrbl" target="_blank" rel="noreferrer">github.com/ctrbl</a>
                    </h6>
                    </div>
                </div>
                {/* <!-- About Me Information End --> */}
        
                </div>
            </div>
            </div>
            {/* <!-- Content Block - About Me Data End --> */}

            {/* <!-- Content Block - Services Start --> */}
            <div className="content__block grid-block">
            <div className="container-fluid p-0">
                <div className="row g-0 align-items-stretch cards">
                    {skills.map((item, _) => 
                        <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                            <div className="cards__card d-flex flex-column">
                            <div className="cards__descr">
                                <h4 className="cards__title animate-in-up">{item.name}</h4>
                                <p className="small cards__text animate-in-up" style={{textAlign: "center"}}>{item.description}</p>
                                <div className="cards__tags d-flex flex-wrap animate-in-up">
                                    {item.tags.map((lang, _) => (
                                        <span className="rounded-tag tag-outline">{lang}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="cards__image d-flex animate-in-up">
                                <img src={item.imgUrl} alt={item.name} />
                            </div>
                            </div>
                        </div>
                    )}
                {/* <!-- services cards grid single item --> */}
                </div>
            </div>
            </div>
            {/* <!-- Content Block - Services End --> */}

        {/* <!-- About Section End --> */}                
        </section>
    )
}

export default About; 