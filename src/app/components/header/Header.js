const Header = () => {
    return (
        <div>
            <a href="#scroll-top" className="scrolltop" id="scroll-top">
                <i className="bx bx-chevron-up scrolltop__icon" alt="Scroll to top"></i>
            </a>
            <header className="header" id="header">
                <nav className="nav bd-container">
                    <a href="#" className="nav__logo">Calories estimation</a>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item"><button href="#home" className="nav__link active-link">Home</button></li>
                            <li className="nav__item"><button href="#about" className="nav__link">About</button></li>
                            <li className="nav__item"><button href="#services" className="nav__link">Services</button></li>
                            <li className="nav__item"><button href="#menu" className="nav__link">Menu</button></li>
                            <li className="nav__item"><button href="#contact" className="nav__link">Contact us</button></li>

                            <li><i className="bx bx-moon change-theme" id="theme-button" alt="Change theme"></i></li>
                        </ul>
                    </div>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="bx bx-menu"></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
