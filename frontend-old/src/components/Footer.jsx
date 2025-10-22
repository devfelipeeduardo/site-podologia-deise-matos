import logo from "../assets/logo-deise-matos.png"
import facebookIcon from "../assets/facebook-icon.svg"
import instagramIcon from "../assets/instagram-icon.svg"

function Footer() {

    return (
        <>
            <footer>
                <div className="center-container">
                    <div className="informations-container">
                        <img className="deise-logo" src={logo} alt="" />
                        <span>©2025 - Podologia Deise Matos.</span>
                        <span>Todos os direitos reservados.</span>
                    </div>
                    <div className="social-medias-container">
                        <a href="https://www.facebook.com/deisematos.matos.1" target="_blank"><img className="fb-icon" src={facebookIcon} alt="Icone do Facebook" /></a>
                        <a href="https://www.instagram.com/podologiadeisematos/" target="_blank"><img className="ig-icon" src={instagramIcon} alt="Icone do Instagram" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;