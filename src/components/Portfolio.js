import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon';
import { galleryItems } from '../lib/data';
import Image from 'next/image'; 

function Portfolio() {
    const [width, setWidth] = useState(window.innerWidth); 

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth); 
        };
        
        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize); 
        }; 
    }, []);

    function isOpposite(index, width) {
        return (index % 4 === 1 || index % 4 === 2) && width >= 768;
    }

    return (
        <section id="portfolio" className="inner inner-first portfolio">
        {/* <!-- Portfolio Section Start --> */}
            <div className="content__block section-grid-title">
                {/* Content Block - H2 Section Title Start */}
                <p className="h2__subtitle animate-in-up">
                    <StarIcon/>
                    <span>Portfolio</span>
                </p>
                <h2 className="h2__title animate-in-up">Check out my projects!</h2>
            </div>
            {/* <!-- Content Block - H2 Section Title End --> */}
            {/* <!-- Content Block - Works Gallery Start --> */}
            <div className="content__block grid-block">
                <div className="container-fluid px-0 inner__gallery">
                    <div className="row gx-0 my-gallery" itemScope itemType="http://schema.org/ImageGallery">
                        {/* Map through galleryItems array and render gallery items */}
                        {galleryItems.map((item, index) => (
                            <figure key={index} className="col-12 col-md-6 gallery__item grid-item animate-card-2" itemScope itemType="http://schema.org/ImageObject">
                                <a href={item.imageUrl} data-image={item.thumbnailUrl} className="gallery__link" itemProp="contentUrl" data-size="1920x1080">
                                    <Image src={item.thumbnailUrl} className="gallery__image" itemProp="thumbnail" alt={item.title} fill/>
                                </a>
                                <figcaption className="gallery__descr" itemProp="caption description">
                                    <h5>{item.title}</h5>
                                    <div className="cards__tags d-flex flex-wrap">
                                        {item.tags.map((tech, idx) => (
                                            <span key={idx} className={`rounded-tag hidden ${isOpposite(index, width) ? "opposite" : ""}`}>{tech}</span>
                                        ))}
                                    </div>
                                    <p className="small" style={{textAlign: "center"}}>{item.description}</p>
                                    <div className="cards__tags d-flex">
                                        {item.tags.slice(0,item.visible).map((tag, idx) => (
                                            <span key={idx} className={`rounded-tag ${isOpposite(index, width) ? "opposite" : ""}`}>{tag}</span>
                                        ))}
                                    </div>
                                </figcaption>
                            </figure>   
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Content Block - Works Gallery End --> */}
        {/* <!-- Portfolio Section End --> */}
        </section>
    );
}

export default Portfolio;