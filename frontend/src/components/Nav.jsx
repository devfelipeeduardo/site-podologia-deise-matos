
import logoGreen from "../assets/logo-deise-matos-green.png"

function Nav({ onScheduleAppointmentRedirect, isOpen, toggleMenu }) {

    return (
        <nav className="nav-base nav-fixed">
            <a href="" className="nav-logo">
                <img src={logoGreen} href="#first-section" alt="logo-podologia-deise-matos" className="nav-logo" />
            </a>
            <div className={`nav-menu-container ${isOpen ? "open" : ""}`}>
                <ul className="nav-menu">
                    <a href="#first-section" className="nav-menu-option" onClick={toggleMenu}><li>Início</li></a>
                    <a href="#second-section" className="nav-menu-option" onClick={toggleMenu}><li>Sobre</li></a>
                    <a href="#third-section" className="nav-menu-option" onClick={toggleMenu}><li>Serviços</li></a>
                    <a href="#fourth-section" className="nav-menu-option" onClick={toggleMenu}><li>Contato</li></a>
                </ul>
            </div>
            <button onClick={onScheduleAppointmentRedirect} className="nav-button-schedule">
                AGENDAR CONSULTA
            </button>
            <button className="menu-toggle" aria-label="Abrir menu" onClick={toggleMenu} >
                ☰
            </button>
        </nav>
    )

}

export default Nav;
