const Section = () => {
    return (
        <>
            <main class="l-main">
                <section class="home" id="home">
                    <div class="home__container bd-container bd-grid">
                        <div class="home__data">
                            <h1 class="home__title">Calorie estimation</h1>
                            <h2 class="home__subtitle">Try to estimate<br />the calorie content<br />of your plate</h2>
                            <a href="#" class="button">Use service</a>
                        </div>

                        <img src={require("../../../assets/image/data.png")} style={{ objectFit: "revert", borderRadius: "50px" }}
                            alt="" className="home__img" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Section;