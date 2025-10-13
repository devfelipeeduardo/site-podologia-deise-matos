import logoGreen from "../assets/logo-deise-matos-green.png"

function NavIntro( {scheduleAppointmentRedirect} ) {

    return (
        <div id="nav-intro" className="nav-intro">
            <a href="" className="nav-logo">
                <img src={logoGreen} href="#first-section" alt="logo-podologia-deise-matos" className="nav-logo" />
            </a>
            <li className="nav-menu">
                <a href="#first-section" className="nav-menu-option"><ul>Início</ul></a>
                <a href="#second-section" className="nav-menu-option"><ul>Sobre</ul></a>
                <a href="#third-section" className="nav-menu-option"><ul>Serviços</ul></a>
                <a href="#fourth-section" className="nav-menu-option"><ul>Depoimentos</ul></a>
            </li>
            <button onClick={scheduleAppointmentRedirect} className="nav-button-schedule">
                AGENDAR CONSULTA
            </button>
        </div>
    )

}

export default NavIntro;
