import { useState } from "react";

import axios from "axios";
import { CircularProgress } from "react-loading-indicators";
const Section = () => {


    const [data, setData] = useState({
        rawImages: ["../../../assets/image/raw_data.jpg"],
        enhancementImages: [''],
        loading: false
    })

    const handleUploadImages = (event) => {
        setData({ loading: true, enhancementImages: [] });
        const files = event.target.files;
        const uploaded_img = [];
        const upload = [];
        const form = new FormData();
        for (let i = 0; i < files.length; i++) {
            let file = files.item(i);
            uploaded_img.push(URL.createObjectURL(file));
            upload.push(file);
            form.append("file[]", file);
        }
        setData({
            rawImages: uploaded_img
        });

        const API_DOMAIN = "http://127.0.0.1:5001";

        axios
            .post(`${API_DOMAIN}/detect`, form)
            .then((res) => {
                console.log(res.data);
                setData({
                    rawImages: uploaded_img,
                    enhancementImages: res.data.paths.map((it) => `${API_DOMAIN}/${it}`),
                    loading: false
                });
            })
            .catch((event) => {
                setData({ loading: false });
            });

    }

    const toogleImage = (event) => {
        setData({
            rawImages: ["../../../assets/image/data.png"],
        });
    }

    return (
        <>
            <main class="l-main">
                <section class="home" id="home">
                    <div class="home__container bd-container bd-grid">
                        <div class="home__data">
                            <h1 class="home__title">Calories estimation</h1>
                            <h2 class="home__subtitle">Try to estimate<br />the calorie content<br />of your plate</h2>
                            <a href="#" class="button">Use service</a>
                        </div>

                        <img src={require("../../../assets/image/main_logo.png")} style={{ objectFit: "revert", borderRadius: "50px" }}
                            alt="" className="home__img" />
                    </div>
                </section>

                {/* <!--========== ABOUT ==========--> */}
                <section class="about section bd-container" id="about">
                    <div class="about__container  bd-grid">
                        <div class="about__data">
                            <span class="section-subtitle about__initial">About our services</span>
                            <h2 class="section-title about__initial"> We accurately estimate <br /> the calorie content <br /> in the main dish</h2>
                            <p class="about__description">We estimate the most accurate calorie content on your plate, with quick and accurate responses when you need to estimate calorie content, try our service</p>
                            <button className="button" onClick={(event) => { toogleImage(event) }}>Try to estimate</button>
                        </div>
                        {data.rawImages?.map((it, id) => (
                            <img
                                src={it}
                                alt="t"
                                class="about__img"
                            />
                        ))}
                        {/* <img src={"../../../assets/image/data.png"} alt="" class="about__img" /> */}
                    </div>
                </section>

                {/* <div
                    className="main-container bd-container"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "350px",
                        width: "100%"
                    }}
                > */}
                {/* <div style={{ width: "50%", backgroundColor: "white" }}>
                        <h2 style={{ textAlign: "center", color: 'orange' }}>Input images</h2>
                        <div>
                            {data.rawImages?.map((it, id) => (
                                <div
                                    style={{ display: "flex", justifyContent: "center" }}
                                    key={id}
                                >
                                    <img
                                        src={require("../../../assets/image/raw_data.jpg")}
                                        width="350px"
                                        height="350px"
                                        style={{ objectFit: "revert", borderRadius: "170px" }}
                                        alt="t"
                                    />
                                </div>
                            ))}
                        </div>
                    </div> */}

                {/* <div style={{ display: "flex", flexDirection: "inherit", alignItems: "center" }}>
                        <input type="file" multiple onChange={(event) => { handleUploadImages(event) }} />
                    </div> */}

                {/* <div
                        style={{
                            width: "50%",
                            backgroundColor: "white"
                        }}
                    >
                        <h2 style={{ textAlign: "center", color: 'orange' }}>Calories estimation</h2>
                        <div>
                            {data.enhancementImages?.map((it, id) => (
                                <div
                                    style={{ display: "flex", justifyContent: "center" }}
                                    key={id}
                                >
                                    <img
                                        src={require("../../../assets/image/data.png")}
                                        width="350px"
                                        height="350px"
                                        style={{ objectFit: "revert", borderRadius: "170px" }}
                                        alt="t"
                                    />
                                </div>
                            ))}
                            {data.loading &&
                                <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center", alignContent: "center" }}>
                                    <CircularProgress variant="bubble-dotted" color="#ea123f" size="large" text="Loading" textColor="" />
                                </div>
                            }
                        </div>
                    </div> */}
                {/* </div> */}

                {/* <!--========== CONTACT US ==========--> */}
                <section class="contact section bd-container" id="contact">
                    <div class="contact__container bd-grid">
                        <div class="contact__data">
                            <span class="section-subtitle contact__initial">Let's talk</span>
                            <h2 class="section-title contact__initial">Contact us</h2>
                            <p class="contact__description">If you want to use our services, please contact us, and we will respond promptly with our 24/7 live chat support</p>
                        </div>

                        <div class="contact__button">
                            <a href="#" class="button">Contact us now</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Section;