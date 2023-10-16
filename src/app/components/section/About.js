import { useState } from "react";

const About = () => {
    const [check, setCheck] = useState(true)

    const toogleImage = (event) => {
        setCheck(false)
    }
    return (
        <section class="about section bd-container" id="about">
            <div class="about__container  bd-grid">
                <div class="about__data">
                    <span class="section-subtitle about__initial">About our services</span>
                    <h2 class="section-title about__initial"> We accurately estimate <br /> the calorie content <br /> in the main dish</h2>
                    <p class="about__description">We estimate the most accurate calorie content on your plate, with quick and accurate responses when you need to estimate calorie content, try our service</p>
                    <div style={{ display: "flex", flexDirection: 'row' }}>
                        <a class="button" onClick={(event) => { toogleImage(event) }}>Try to estimate</a>
                    </div>
                </div>
                {check ? <img src={require("../../../assets/image/raw_data.jpg")} alt="" class="about__img" /> : <img src={require("../../../assets/image/data.png")} alt="" class="about__img" />}
            </div>
        </section>
    )
}

export default About;