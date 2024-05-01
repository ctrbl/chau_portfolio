import StarIcon from './StarIcon';

export const downloadResume = () => {
    const pdfUrl = "/files/Chau_Nguyen_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Chau_Nguyen_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function Home() {
    return (
        <section id="home" className="main intro">
            {/* <!-- Intro Section Start --> */}

            {/* <!-- Headline Start --> */}
            <div id="headline" className="headline d-flex align-items-start flex-column" data-speed="1">
            <p className="headline__subtitle animate-headline">
                <StarIcon/>
                <span>Let's meet!</span>
            </p>
            <h1 className="headline__title animate-headline" style={{textAlign: "center"}}>I'm Chau Nguyen<br />✨ Aspiring ✨<br />Software Engineer</h1>
            <div className="headline__btnholder d-flex flex-column flex-sm-row">
                <a className="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline" href="#portfolio">
                <span className="btn-caption">My Works</span>
                <i className="ph-bold ph-squares-four"></i>
                </a>
                <a id="downloadButton" className="btn mobile-vertical btn-default btn-hover btn-hover-outline-mobile animate-headline" href="#0">
                <span className="btn-caption" onClick={downloadResume}>Download CV</span>
                <i className="ph-bold ph-download-simple"></i>
                </a>
            </div>
            </div>
            {/* <!-- Headline End --> */}

            {/* <!-- Scroll Button Start --> */}
            <div className="rotating-btn">
            <a href="#portfolio" className="rotating-btn__link slide-down">
                {/* <!-- SVG rotating text --> */}
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 120 120" style={{ enableBackground: "new 0 0 120 120" }} xmlSpace="preserve" 
                className="animate-rotation" data-value="360">
                <defs>
                    <path id="textPath" d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"/>
                </defs>
                <g>
                    <use xlinkHref="#textPath" fill="none"></use>
                    <text>
                    {/* <!-- button text here!!! --> */}
                    <textPath xlinkHref="#textPath">Scroll for More * Scroll for More * </textPath>
                    </text>
                </g>
                </svg>
                {/* <!-- arrow icon --> */}
                <i className="ph-bold ph-arrow-down"></i>
            </a>
            </div>
            {/* <!-- Scroll Button End --> */}

            {/* <!-- Intro Section End --> */}
        </section>   
    )
}

export default Home;