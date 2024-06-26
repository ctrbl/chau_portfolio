import Script from 'next/script'; 
import Header from '../components/Header'; 
import Avatar from '../components/Avatar';
import Home from '../components/Home'
import Portfolio from '../components/Portfolio';
import About from '../components/About'; 
import Resume from '../components/Resume'; 
import Contact from '../components/Contact';
import PhotoSwipe from '../components/PhotoSwipe';

import { galleryItems } from '../lib/data';

function App() {
  return (
    <body>
      <Script src="/js/app.js"/>
      <link rel="stylesheet" href="css/App.css" />
      <div className="App">
        {/* <!-- Loader Start --> */}
        <div id="loader" className="loader">
          <div id="loaderContent" className="loader__content">
            <div className="loader__shadow"></div>
            <div className="loader__box"></div>
          </div>
        </div>
        {/* <!-- Loader End --> */}
        <Header/>
        {/* <!-- Gradient Background Start --> */}
        <div className="gradient-background">
          <div className="blur"></div>
          <div className="blur"></div>
          <div className="blur"></div>
        </div>
        {/* <!-- Gradient Background End --> */}
        <Avatar/>
        <div id="content" className="content">
          <div className="content__wrapper">
            <Home/>
            <Portfolio projects={galleryItems} />
            <About/>
            <Resume/>
            <Contact/>
          </div>
        </div>
      </div>
      <PhotoSwipe/>
    </body>
  );
}

export default App;
