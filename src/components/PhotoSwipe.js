import React, { useState, useEffect } from 'react'; 

function PhotoSwipe() {
    const [currentLink, setCurrentLink] = useState('');

    const linkHandle = () => {
        if (currentLink) {
            window.open(currentLink, '_blank');
        }
    };

    useEffect(() => {
        // Event listener to update currentLink
        const updateLink = (link) => setCurrentLink(link);

        document.addEventListener('updateLink', (event) => updateLink(event.detail));

        return () => {
            document.removeEventListener('updateLink', updateLink);
        };
    }, []);

    return (
        <div className="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        {/* <!-- Root element of PhotoSwipe. Must have className pswp. --> */}

            {/* <!-- Background of PhotoSwipe.
            It's a separate element, as animating opacity is faster than rgba(). --> */}
            <div className="pswp__bg"></div>

            {/* <!-- Slides wrapper with overflow:hidden. --> */}
            <div className="pswp__scroll-wrap">

                {/* <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
                <!-- don't modify these 3 pswp__item elements, data is added later on. --> */}
                <div className="pswp__container">
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                </div>

                {/* <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. --> */}
                <div className="pswp__ui pswp__ui--hidden">

                <div className="pswp__top-bar">

                    {/* <!--  Controls are self-explanatory. Order can be changed. --> */}

                    <div className="pswp__counter"></div>

                    <button className="pswp__button pswp__button--close link-s" title="Close (Esc)"></button>

                    <button className="pswp__button pswp__button--link" title="Link" onClick={linkHandle}></button>

                    <button className="pswp__button pswp__button--fs link-s" title="Toggle fullscreen"></button>

                    <button className="pswp__button pswp__button--zoom link-s" title="Zoom in/out"></button>

                    {/* <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                    <!-- element will get className pswp__preloader-active when preloader is running --> */}
                    <div className="pswp__preloader">
                    <div className="pswp__preloader__icn">
                        <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut"></div>
                        </div>
                    </div>
                    </div>
                </div>

                    <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div className="pswp__share-tooltip"></div>
                    </div>

                    <button className="pswp__button pswp__button--arrow--left link-s" title="Previous (arrow left)"></button>

                    <button className="pswp__button pswp__button--arrow--right link-s" title="Next (arrow right)"></button>

                    <div className="pswp__caption">
                    <div className="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoSwipe;