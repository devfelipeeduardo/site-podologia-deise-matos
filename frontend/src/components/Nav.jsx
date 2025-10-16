
import logoGreen from "../assets/logo-deise-matos-green.png"

function Nav({ onScheduleAppointmentRedirect, isOpen, toggleMenu}) {

    return (
        <nav className="nav-base nav-fixed">
            <a href="" className="nav-logo">
                <img src={logoGreen} href="#first-section" alt="logo-podologia-deise-matos" className="nav-logo" />
            </a>
            <div className={`nav-menu-container ${isOpen ? "open" : ""}`}>
                <li className="nav-menu">
                    <a href="#first-section" className="nav-menu-option"><ul>Início</ul></a>
                    <a href="#second-section" className="nav-menu-option"><ul>Sobre</ul></a>
                    <a href="#third-section" className="nav-menu-option"><ul>Serviços</ul></a>
                    <a href="#fourth-section" className="nav-menu-option"><ul>Contato</ul></a>
                </li>
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
