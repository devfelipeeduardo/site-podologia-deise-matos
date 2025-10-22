import { useEffect, useState } from "react";
import logo from "../assets/logo-deise-matos.png"

function SuspenseNav({ onScheduleAppointmentRedirect, isOpen, toggleMenu }) {

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
        <nav id="suspense-nav" className={`suspense-nav nav-base ${hidden ? "nav-hidden" : ""}`}>
            <a href="" className="nav-logo">
                <img src={logo} href="#first-section" alt="logo-podologia-deise-matos" className="nav-logo" />
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
            <button className="menu-toggle brand-green-light" aria-label="Abrir menu" onClick={toggleMenu} >
                ☰
            </button>
        </nav >
    )

}
export default SuspenseNav;
