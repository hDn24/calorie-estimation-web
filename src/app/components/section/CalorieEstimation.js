import { useState } from "react";

import axios from "axios";
import { CircularProgress } from "react-loading-indicators";

const CalorieEstimation = () => {

    const [data, setData] = useState({
        rawImages: [""],
        enhancementImages: [""],
        loading: false
    });

    const handleUploadImages = (event) => {
        const files = event.target.files;
        const uploadedImages = [];
        const upload = [];
        const form = new FormData();
        for (let i = 0; i < files.length; i++) {
            let file = files.item(i);
            uploadedImages.push(URL.createObjectURL(file));
            upload.push(file);
            form.append("file[]", file);
        }
        setData({
            rawImages: uploadedImages,
            loading: true
        });

        const API_DOMAIN = "https://calories-estimation.onrender.com";

        axios.post(`${API_DOMAIN}/detect`, form)
            .then((res) => {
                setData({
                    rawImages: uploadedImages,
                    enhancementImages: res.data.paths.map((path) => `${API_DOMAIN}/${path}`),
                    loading: false
                });
            })
            .catch(() => {
                setData({ loading: false });
            });

    };

    return (
        <div className="main-container bd-container" style={{ display: "flex", flexDirection: "row", height: "350px", width: "100%" }}>
            <div style={{ width: "50%", backgroundColor: "white" }}>
                <h2 style={{ textAlign: "center", color: 'orange' }}>Input images</h2>
                <div>
                    {data.rawImages?.map((image, id) => (
                        <div style={{ display: "flex", justifyContent: "center" }} key={id}>
                            <img src={image} width="350px" height="350px" style={{ objectFit: "revert", borderRadius: "170px" }} alt="t" />
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "inherit", alignItems: "center" }}>
                <input type="file" multiple onChange={handleUploadImages} />
            </div>

            <div style={{ width: "50%", backgroundColor: "white" }}>
                <h2 style={{ textAlign: "center", color: 'orange' }}>Calories estimation</h2>
                <div>
                    {data.enhancementImages?.map((image, id) => (
                        <div style={{ display: "flex", justifyContent: "center" }} key={id}>
                            <img src={image} width="350px" height="350px" style={{ objectFit: "revert", borderRadius: "170px" }} alt="t" />
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
    );
};

export default CalorieEstimation;