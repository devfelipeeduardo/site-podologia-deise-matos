import { useEffect, useState } from "react";
import logo from "../assets/logo-deise-matos.png"

function Nav() {

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav id="suspense-nav" className={`nav ${hidden ? "nav-hidden" : ""}`}>
            <a href="" className="nav-logo">
                <img src={logo} href="#first-section" alt="logo-podologia-deise-matos" className="nav-logo" />
            </a>
            <li className="nav-menu">
                <a href="#first-section" className="nav-menu-option"><ul>Início</ul></a>
                <a href="#second-section" className="nav-menu-option"><ul>Sobre</ul></a>
                <a href="#third-section" className="nav-menu-option"><ul>Serviços</ul></a>
                <a href="#fourth-section" className="nav-menu-option"><ul>Depoimentos</ul></a>
            </li>
            <button href="https://api.whatsapp.com/send/?phone=5511975126282&text&type=phone_number&app_absent=0" className="nav-button-schedule">
                AGENDAR CONSULTA
            </button>
        </nav>
    )

}

export default Nav;
