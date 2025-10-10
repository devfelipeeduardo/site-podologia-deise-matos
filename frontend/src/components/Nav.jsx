import logo from "../assets/logo-deise-matos.png"

function Nav() {

    return (
        <nav>
            <a href="" className="nav-logo">
                <img src={logo} alt="" className="nav-logo" />
            </a>
            <li className="nav-menu">
                <a href="#first-section" className="nav-menu-option"><ul>Início</ul></a>
                <a href="#second-section" className="nav-menu-option"><ul>Sobre</ul></a>
                <a href="#third-section" className="nav-menu-option"><ul>Serviços</ul></a>
                <a href="#fourth-section" className="nav-menu-option"><ul>Depoimentos</ul></a>
            </li>
            <button className="nav-button-schedule">
                AGENDAR CONSULTA
            </button>
        </nav>
    )

}

export default Nav;