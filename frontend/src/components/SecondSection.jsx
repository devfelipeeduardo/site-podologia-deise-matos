import correctIcon from "../assets/correct.png"

function FirstSection() {

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
                            <p className="solution-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, numquam quidem eos quas quos, illo.</p>
                        </div> {/* *4 */}
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />                            <h4 className="solution-title">Unha Encravada</h4>
                            <p className="solution-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, numquam quidem eos quas quos, illo.</p>
                        </div> {/* *4 */}
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />                            <h4 className="solution-title">Unha Encravada</h4>
                            <p className="solution-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, numquam quidem eos quas quos, illo.</p>
                        </div> {/* *4 */}
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />                            <h4 className="solution-title">Unha Encravada</h4>
                            <p className="solution-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, numquam quidem eos quas quos, illo.</p>
                        </div> {/* *4 */}
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />                            <h4 className="solution-title">Unha Encravada</h4>
                            <p className="solution-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, numquam quidem eos quas quos, illo.</p>
                        </div> {/* *4 */}
                        <div className="solution-child">
                            <img className="solution-correct-emoji" src={correctIcon} alt="OK IMAGE" />                            <h4 className="solution-title">Unha Encravada</h4>
                            <p className="solution-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, numquam quidem eos quas quos, illo..</p>
                        </div> {/* *4 */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection;