import './App.css';
import React from "react";
import axios from "axios";
import { CircularProgress } from "react-loading-indicators";

const API_DOMAIN = "http://127.0.0.1:5001";


class App extends React.Component {
  constructor() {
    super();
    this.handleUploadImages = this.handleUploadImages.bind(this);
  }
  state = {
    rawImages: [],
    enhancementImages: [],
    loading: false
  };

  handleUploadImages(e) {
    this.setState({ loading: true, enhancementImages: [] });
    const files = e.target.files;
    const res = [];
    const upload = [];
    const form = new FormData();
    for (let i = 0; i < files.length; i++) {
      let file = files.item(i);
      res.push(URL.createObjectURL(file));
      upload.push(file);
      form.append("file[]", file);
    }
    this.setState({
      rawImages: res
    });
    axios
      .post(`${API_DOMAIN}/detect`, form)
      .then((res) => {
        console.log(res.data);
        this.setState({
          enhancementImages: res.data.paths.map((it) => `${API_DOMAIN}/${it}`)
        });
        this.setState({ loading: false });
      })
      .catch((e) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <>
        <a href="#" class="scrolltop" id="scroll-top">
          <i class='bx bx-chevron-up scrolltop__icon'></i>
        </a>
        <header class="l-header" id="header">
          <nav class="nav bd-container">
            <a href="#" class="nav__logo">Food detection</a>

            <div class="nav__menu" id="nav-menu">
              <ul class="nav__list">
                <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
                <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
                <li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>

                <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>
              </ul>
            </div>

            <div class="nav__toggle" id="nav-toggle">
              <i class='bx bx-menu'></i>
            </div>
          </nav>
        </header>

        <input type="file" multiple onChange={this.handleUploadImages} />
        <div
          className="main-container"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "500vh",
            width: "100%"
          }}
        >
          <div style={{ width: "50%", backgroundColor: "lightblue" }}>
            <h2 style={{ textAlign: "center", color: 'orange' }}>The raw input images</h2>
            <div>
              {this.state.rawImages.map((it, id) => (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  key={id}
                >
                  <img
                    src={it}
                    width="80%"
                    height="80%"
                    style={{ objectFit: "revert", borderRadius: "50px" }}
                    alt="t"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: "50%",
              backgroundColor: "rgb(22, 27, 29)"
            }}
          >
            <h2 style={{ textAlign: "center", color: 'orange' }}>Food detections</h2>
            <div>
              {this.state.enhancementImages.map((it, id) => (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  key={id}
                >
                  <img
                    src={it}
                    width="80%"
                    height="80%"
                    style={{ objectFit: "revert", borderRadius: "50px" }}
                    alt="t"
                  />
                </div>
              ))}
              {this.state.loading &&
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center", alignContent: "center" }}>
                  <CircularProgress variant="bubble-dotted" color="#ea123f" size="large" text="Loading" textColor="" />
                </div>
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default App;