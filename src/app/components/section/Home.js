const Home = () => {
    return (
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
    )
}

export default Home;