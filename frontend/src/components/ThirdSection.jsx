import aboutUsImage from "../assets/about-us-image.png"

function ThirdSection() {

    return (
        <section id="third-section" className="third-section">
            <div className="third-container">
                <img src={aboutUsImage} alt="" />
                <div className="div-who-we-are-text">
                    <h3>SOBRE NÓS</h3>
                    <h2>Entenda quem somos e porquê existimos</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, reiciendis quis. Unde magnam facere quam saepe aut placeat fugit laboriosam. Ad qui doloremque beatae nobis, provident illo deleniti eius porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, officia aliquam repellat dolorem minus autem distinctio, commodi deserunt cumque vero dicta veniam dolorum, iste iure! Amet excepturi sunt inventore iusto.</p>
                </div>
            </div>
        </section>
    )
}

export default ThirdSection;