import { useState } from "react";

const About = () => {
    const [check, setCheck] = useState(true)

    const toogleImage = (event) => {
        setCheck(false)
    }
    return (
        <section className="about section bd-container" id="about">
            <div className="about__container  bd-grid">
                <div className="about__data">
                    <span className="section-subtitle about__initial">About our services</span>
                    <h2 className="section-title about__initial"> We accurately estimate <br /> the calorie content <br /> in the main dish</h2>
                    <p className="about__description">We estimate the most accurate calorie content on your plate, with quick and accurate responses when you need to estimate calorie content, try our service</p>
                    <div className={{ display: "flex", flexDirection: 'row' }}>
                        <a className="button" onClick={(event) => { toogleImage(event) }}>Try to estimate</a>
                    </div>
                </div>
                {check ? <img src={require("../../../assets/image/raw_data.jpg")} alt="" className="about__img" /> : <img src={require("../../../assets/image/data.png")} alt="" className="about__img" />}
            </div>
        </section>
    )
}

export default About;