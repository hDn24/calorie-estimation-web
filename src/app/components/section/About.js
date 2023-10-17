import { useState } from "react";

const About = () => {
    const [isImageVisible, setImageVisible] = useState(true);

    const toggleImage = () => {
        setImageVisible(false);
    };

    return (
        <section className="about section bd-container" id="about">
            <div className="about__container bd-grid">
                <div className="about__data">
                    <span className="section-subtitle about__initial">About our services</span>
                    <h2 className="section-title about__initial">
                        We accurately estimate <br /> the calorie content <br /> in the main dish
                    </h2>
                    <p className="about__description">
                        We estimate the most accurate calorie content on your plate, with quick and accurate responses when you need to estimate calorie content, try our service
                    </p>
                    <div style={{ display: "flex", flexDirection: 'row' }}>
                        <a className="button" onClick={toggleImage}>Try to estimate</a>
                    </div>
                </div>
                {isImageVisible ?
                    <img src={require("../../../assets/image/raw_data.jpg")} alt="" className="about__img" /> :
                    <img src={require("../../../assets/image/data.png")} alt="" className="about__img" />
                }
            </div>
        </section>
    );
};
export default About;