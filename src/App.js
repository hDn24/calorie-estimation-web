import './App.css';
import React from "react";
import axios from "axios";

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
      <React.Fragment>
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
          <div style={{ width: "50%", backgroundColor: "pink" }}>
            <h2 style={{ textAlign: "center" }}>The raw input images</h2>
            <div>
              {this.state.rawImages.map((it, id) => (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  key={id}
                >g
                  <img
                    src={it}
                    width="80%"
                    height="400px"
                    style={{ objectFit: "revert", borderRadius: "20px" }}
                    alt="t"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: "50%",
              backgroundColor: "green"
            }}
          >
            <h2 style={{ textAlign: "center" }}>Food detections</h2>
            <div>
              {this.state.enhancementImages.map((it, id) => (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  key={id}
                >
                  <img
                    src={it}
                    width="80%"
                    height="400px"
                    style={{ objectFit: "revert", borderRadius: "20px" }}
                    alt="t"
                  />
                </div>
              ))}
              {this.state.loading && <p style={{ textAlign: "center" }}>Loading ...</p>}
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}


export default App;