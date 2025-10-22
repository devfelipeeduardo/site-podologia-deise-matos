import aboutUsImage from "../assets/about-us-image.png"

function ThirdSection() {

    return (
        <section id="third-section" className="third-section">
            <div className="third-container">
                <img src={aboutUsImage} alt="" />
                <div className="div-who-we-are-text">
                    <h3>SOBRE NÓS</h3>
                    <h2>Entenda quem somos e porquê existimos</h2>
                    <p>
                        Com 18 anos de experiência, construímos uma história marcada por cuidado, ética e excelência.
                        Nossa missão é oferecer um atendimento personalizado, com atenção aos detalhes e dedicação a cada cliente.
                        Acreditamos que cada pessoa é única e merece confiança, bem-estar e resultados de qualidade.
                        <br/>
                        ✨ Missão: cuidar com empatia e profissionalismo.
                        <br/>
                        💚 Valores: respeito, ética, confiança, qualidade e amor pelo que fazemos.                    </p>
                </div>
            </div>
        </section>
    )
}

export default ThirdSection;