import correctIcon from "../assets/correct.png"

function SecondSection() {

    return (
        <section id="second-section" className="second-section">
            <div className="second-container">
                <div className="services-container">
                    <h3>SERVIÇOS</h3>
                    <h2>Como podemos ajudá-lo a
                        resolver seu incômodo nos
                        pés?
                    </h2>
                    <div className="solutions">
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />
                            <h4 className="solution-title">Unha Encravada</h4>
                            <p className="solution-description">Tratamento para aliviar dor e inflamação, restaurando o formato natural da unha.</p>
                        </div>
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />
                            <h4 className="solution-title">Pés Diabéticos</h4>
                            <p className="solution-description">Cuidados especiais para prevenir feridas e infecções em pés sensíveis.</p>
                        </div>
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />
                            <h4 className="solution-title">Podologia Preventiva</h4>
                            <p className="solution-description">Avaliação e manutenção regular para evitar problemas futuros nos pés.</p>
                        </div>
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />
                            <h4 className="solution-title">Onicomicose</h4>
                            <p className="solution-description">Tratamento eficaz contra fungos que deixam as unhas amareladas e espessas.</p>
                        </div>
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />
                            <h4 className="solution-title">Micose de Unha</h4>
                            <p className="solution-description">Eliminação segura de fungos, devolvendo a aparência saudável às unhas.</p>
                        </div>
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />
                            <h4 className="solution-title">Onicogrifose</h4>
                            <p className="solution-description">Correção de unhas grossas e deformadas para melhorar conforto e estética.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;