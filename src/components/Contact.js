import StarIcon from "./StarIcon";
import { contact } from "../lib/data";

function Contact() {
    return (
        <section id="contact" className="inner contact">
        {/* <!-- Contact Section Start --> */}
            {/* <!-- Content Block - H2 Section Title Start --> */}
            <div className="content__block section-title">
            <p className="h2__subtitle  animate-in-up">
                <StarIcon/>
                <span>Contact</span>
            </p>
            <h2 className="h2__title  animate-in-up">Let's get in touch!</h2>
            </div>
            {/* <!-- Content Block - H2 Section Title End --> */}

            {/* <!-- Content Block - Contact Form Start --> */}
            <div className="content__block grid-block block-grid-large">
            <div className="form-container">

                {/* <!-- Reply Messages Start --> */}
                <div className="form__reply centered text-center">
                <i className="ph-bold ph-smiley reply__icon"></i>
                <p className="reply__title">Done!</p>
                <span className="reply__text">Thanks for your message. I'll get back as soon as possible.</span>
                </div> 
                {/* <!-- Reply Messages End --> */}

                {/* <!-- Contact Form Start --> */}
                <form className="form contact-form" id="contact-form">
                {/* <!-- Hidden Required Fields --> */}
                <input type="hidden" name="project_name" value="Chau Portfolio" />
                <input type="hidden" name="admin_email" value="minhchau.ng1028@gmail.com" />
                <input type="hidden" name="form_subject" value="Contact Form Message from Portfolio" />
                {/* <!-- END Hidden Required Fields--> */}
                <div className="container-fluid p-0">
                    <div className="row gx-0">
                    <div className="col-12 col-md-6 form__item animate-in-up">
                        <input type="text" name="Name" placeholder="Your Name*" required />
                    </div>
                    <div className="col-12 col-md-6 form__item animate-in-up">
                        <input type="text" name="Company" placeholder="Company Name" />
                    </div>
                    <div className="col-12 col-md-6 form__item animate-in-up">
                        <input type="email" name="E-mail" placeholder="Email Adress*" required />
                    </div>
                    <div className="col-12 col-md-6 form__item animate-in-up">
                        <input type="tel" name="Phone" placeholder="Phone Number*" required />
                    </div>
                    <div className="col-12 form__item animate-in-up">
                        <textarea name="Message" placeholder="A Few Words*" required></textarea>
                    </div>
                    <div className="col-12 form__item animate-in-up">
                        <button className="btn btn-default btn-hover btn-hover-accent" type="submit">
                        <span className="btn-caption">Send Message</span>
                        <i className="ph-bold ph-paper-plane-tilt"></i>
                        </button>
                    </div>
                    </div>
                </div>
                </form>
                {/* <!-- Contact Form End --> */}

            </div>
            </div>
            {/* <!-- Content Block - Contact Form End --> */}

            {/* <!-- Content Block - Socials Cards Start --> */}
            <div className="content__block grid-block">
            <div className="socials-cards d-flex justify-content-start flex-wrap">
                {contact.map((item, _) => (
                    <div className="socials-cards__item d-flex grid-item-s animate-card-5">
                    <div className="socials-cards__card">
                        <i className={item.symbol}></i>
                        <a className="socials-cards__link" href={item.link} target="_blank" rel="noreferrer"><div></div></a>
                    </div>
                    </div>
                ))}
                {/* <!-- socials item --> */}

            </div>
            </div>
            {/* <!-- Content Block - Socials Cards End --> */}

            {/* <!-- Content Block - Teaser Start --> */}
            <div className="content__block">
            <div className="teaser">
                <p className="teaser__text animate-in-up">
                <a className="text-link-bold" href="mailto:example@example.com?subject=Message%20from%20your%20site">Drop me a line </a> 
                and I'll get back 
                as soon as possible.
                </p>
            </div>
            </div>
            {/* <!-- Content Block - Teaser End --> */}

            {/* <!-- Content Block - Contact Data Start --> */}
            <div className="content__block">
            <div className="container-fluid p-0 contact-lines animate-in-up">
                <div className="row g-0 contact-lines__item">
                    {/* <!-- data item --> */}
                    {contact.slice(0, 2).map((item, _) => (
                        <div className="col-12 col-md-6 contact-lines__data">
                            <p className="contact-lines__title animate-in-up">{item.name}</p>
                            <p className="contact-lines__text animate-in-up">
                            <a className="text-link-bold" href={item.link} target="_blank" rel="noreferrer">{item.value}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            {/* <!-- Content Block - Contact Data End --> */}
        {/* <!-- Contact Section End --> */}
        </section>
    )
}

export default Contact;