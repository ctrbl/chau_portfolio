import StarIcon from './StarIcon';
import { resume, tools, awards } from '../lib/data';

function Resume() {
    return (
        <section id="resume" className="inner resume">
        {/* <!-- Resume Section Start --> */}

            {/* <!-- Content Block - H2 Section Title Start --> */}
            <div className="content__block block-large">
            <p className="h2__subtitle animate-in-up">
                <StarIcon/>
                <span>Resume</span>
            </p>
            <h2 className="h2__title animate-in-up">Education and<br/>Work Experience</h2>
            <p className="h2__text animate-in-up">
            I have been consistently seeking academic challenges, particularly in theory and AI/ML electives, to continuously enhance my skills and knowledge. With a relentless pursuit of excellence, I am committed to gaining practical experience and refining my programming abilities to excel as an aspiring software engineer.
            </p>
            </div>
            {/* <!-- Content Block - H2 Section Title End --> */}

            {resume.map((resume_section, _) => (
                <div className="content__block block-large">
                {/* <!-- Content Block - Education Start --> */}

                {/* <!-- H3 Block Start --> */}
                <div className="section-h3">
                    <h3 className="h3__title animate-in-up">{resume_section.title}</h3>
                </div>
                {/* <!-- H3 Block End --> */}

                {resume_section.items.map((item, _) => (
                    <div className="container-fluid p-0 resume-lines">
                    {/* <!-- Education Lines Start --> */}
                        {/* <!-- education single item --> */}
                        <div className="row g-0 resume-lines__item animate-in-up">
                            <div className="col-12 col-md-2">
                                <span className="resume-lines__date animate-in-up">{item.date}</span>
                            </div>
                            <div className="col-12 col-md-5">
                                <h5 className="resume-lines__title animate-in-up">{item.role}</h5>
                                <p className="resume-lines__source animate-in-up"> 
                                    <a href={item.link} className="text-link-bold" target="_blank" rel="noreferrer">{item.name}</a>
                                </p>
                            </div>
                            <div className="col-12 col-md-5">
                                <p className="small resume-lines__descr animate-in-up">{item.description}</p>
                            </div>
                            <div className="col-12 col-md-2"></div>
                            <div className="col-12 col-md-10">
                                {item.tags && item.tags.length > 0 && (
                                    <div className="row g-0" style={{marginTop: "1rem"}}>
                                        <div className="resume-lines__tags d-flex flex-wrap animate-in-up">
                                            {item.tags.map((tag, _) => (
                                                <span key={tag} className="rounded-tag tag-outline">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    {/* <!-- Education Lines End --> */}
                    </div>
                ))}

                {/* <!-- Content Block - Education End --> */}
                </div>
            ))}

            {/* <!-- Content Block - H3 Block Start --> */}
            <div className="content__block">
            <div className="section-h3 section-h3-grid">
                <h3 className="h3__title animate-in-up">My favorite tools</h3>
            </div>
            </div>
            {/* <!-- Content Block - H3 Block End --> */}

            {/* <!-- Content Block - Tools List Start --> */}
            <div className="content__block grid-block block-large">
            {/* <!-- Tools List Start --> */}
            <div className="tools-cards d-flex justify-content-start flex-wrap">
                {tools.map((item, _) => (
                    <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                    <div className="tools-cards__card">
                        <img className="tools-cards__icon animate-in-up" src={item.link} alt={`${item.name} Icon`} />
                        <h6 className="tools-cards__caption animate-in-up">{item.name}</h6>
                    </div>
                    </div>
                ))}
            </div>
            {/* <!-- Tools List End --> */}
            </div>
            {/* <!-- Content Block - Tools List End --> */}

            {/* <!-- Content Block - H2 Block Start --> */}
            <div className="content__block section-title">
            <p className="h2__subtitle animate-in-up">
                <StarIcon/>
                <span>Awards</span>
            </p>
            <h2 className="h2__title animate-in-up">Highlights about me!</h2>
            </div>
            {/* <!-- Content Block - H2 Block End --> */}

            {/* <!-- Content Block - Testimonials Slider Start --> */}
            <div className="content__block">

            {/* <!-- Testimonials Slider Start --> */}
            <div className="testimonials-slider">
                {/* <!-- slider main container --> */}
                <div className="swiper-testimonials">
                {/* <!-- additional required wrapper --> */}
                <div className="swiper-wrapper">
                    {/* <!-- slides --> */}
                    {awards.map((item, _) => (
                        <div className="swiper-slide">
                        <div className="testimonials-card animate-in-up">
                            <div className="testimonials-card__tauthor d-flex animate-in-up">
                            <div className="tauthor__avatar">
                                <img src={item.image} alt={item.from} />
                            </div>
                            <div className="tauthor__info d-flex flex-column justify-content-center">
                                <p className="tauthor__name">{item.name}</p>
                                <p className="tauthor__position"> 
                                <a href="#0" className="text-link-bold" target="_blank">{item.from}</a>
                                </p>
                            </div>
                            </div>
                            <div className="testimonials-card__descr animate-in-up">
                            <p>{item.description}</p>
                            </div>
                            <div className="testimonials-card__btnholder animate-in-up">
                            <a className="btn mobile-vertical btn-line btn-transparent slide-right" href={item.link} target="_blank" rel="noreferrer">
                                <span className="btn-caption">Link</span>
                                <i className="ph-bold ph-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                {/* <!-- navigation buttons --> */}
                <div className="swiper-button-prev mxd-slider-btn-square mxd-slider-btn-square-prev animate-in-up">
                    <a className="btn btn-square btn-square-s btn-outline slide-left" href="#0">
                    <i className="ph-bold ph-caret-left"></i>
                    </a>
                </div>
                <div className="swiper-button-next mxd-slider-btn-square mxd-slider-btn-square-next animate-in-up">
                    <a className="btn btn-square btn-square-s btn-outline slide-right" href="#0">
                    <i className="ph-bold ph-caret-right"></i>
                    </a>
                </div>
                </div>
            </div>
            {/* <!-- Testimonials Slider End --> */}

            </div>
            {/* <!-- Content Block - Testimonials Slider End --> */}

        {/* <!-- Resume Section End --> */}
        </section>
    )
}

export default Resume; 