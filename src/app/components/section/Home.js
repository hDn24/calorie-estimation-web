const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                    <h1 className="home__title">Calories estimation</h1>
                    <h2 className="home__subtitle">
                        Try to estimate<br />
                        the calorie content<br />
                        of your plate
                    </h2>
                    <a href="#" className="button">Use service</a>
                </div>

                <img
                    src={require("../../../assets/image/main_logo.png")}
                    style={{ objectFit: "revert", borderRadius: "50px" }}
                    alt=""
                    className="home__img" />
            </div>
        </section>
    );
};

export default Home;