import './App.css';
import React, { useState } from "react";
import axios from "axios";
import { CircularProgress } from "react-loading-indicators";
import Header from './app/components/header/Header';

const App = () => {

  const [data, setData] = useState({
    rawImages: [],
    enhancementImages: [],
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

  return (
    <>
      <Header></Header>
      <input type="file" multiple onChange={(event) => { handleUploadImages(event) }} />
      <div
        className="main-container"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "80%",
          width: "100%"
        }}
      >
        <div style={{ width: "50%", backgroundColor: "lightblue" }}>
          <h2 style={{ textAlign: "center", color: 'orange' }}>The raw input images</h2>
          <div>
            {data.rawImages?.map((it, id) => (
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
            {data.enhancementImages?.map((it, id) => (
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
            {data.loading &&
              <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center", alignContent: "center" }}>
                <CircularProgress variant="bubble-dotted" color="#ea123f" size="large" text="Loading" textColor="" />
              </div>
            }
          </div>
        </div>
      </div>
    </>

  )
}

export default App;
