import Home from "./Home";
import About from "./About";
import CalorieEstimation from "./CalorieEstimation";
import Contact from "./Contact";

const Section = () => {
    return (
        <>
            <main class="l-main">
                <Home></Home>
                <About></About>
                <CalorieEstimation></CalorieEstimation>
                <Contact></Contact>
            </main>
        </>
    )
}

export default Section;