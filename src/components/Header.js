import { sections } from '../lib/data';
import "../../public/css/App.css";

function Header() {
    return (
        <header id="header" className="header d-flex justify-content-between">
            {/* <!-- Header Start --> */}
            {/* <!-- Navigation Menu Start --> */}
            <div className="header__navigation">
            <nav id="menu" className="menu">
                <ul className="menu__list d-flex justify-content-start">
                    {sections.map((item, _) => (
                        <li className="menu__item">
                            <a className="menu__link btn" href={item.link}>
                            <span className="menu__caption">{item.section}</span>
                            <i className={item.label}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            </div>
            {/* <!-- Navigation Menu End --> */}

            {/* <!-- Header Controls Start --> */}
            <div className="header__controls d-flex justify-content-end">
            <button id="color-switcher" className="color-switcher header__switcher btn" type="button" role="switch" aria-label="light/dark mode" aria-checked="true"></button>
            {/* <ThemeSwitcherButton /> */}
            <a id="notify-trigger" className="header__trigger btn" href="mailto:minhchau.ng1028@gmail.com">
                <span className="trigger__caption">Let's Talk</span>
                <i className="ph-bold ph-chat-dots"></i>
            </a>
            </div>
            {/* <!-- Header Controls End --> */}

            {/* <!-- Header End --> */}
        </header>
    )
}

export default Header; 