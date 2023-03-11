import "./Textbar.css";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Textbar = () => {
  const [loading, setLoading] = useState(false);
  const [userPrompt, setUserPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Method to handle enter-key press
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      generateImage();
    }
  };

  // Method to generate image
  const generateImage = async () => {
    setLoading(true);
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "256x256",
    };
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    console.log(urlData);
    setImageUrl(urlData);
    setLoading(false);
  };

  // Variable declarations
  let currRotation = 0;
  let currZoom = 1;
  let currReflection = false;

  // Methods to perform operations
  const rotate = () => {
    currRotation += 90;
    const image = document.getElementById("genImage");
    image.style.transform = `rotate(${currRotation}deg)`;
  };

  const zoomOut = () => {
    // Maximum scaling of 0.5
    if (currZoom > 0.5) {
      currZoom -= 0.1;
    }
    const zoom = document.getElementById("genImage");
    zoom.style.transform = `scale(${currZoom})`;
  };

  const reflect = () => {
    currReflection = !currReflection;
    const ref = document.getElementById("genImage");
    ref.style.transform = currReflection ? "scaleX(-1)" : "scaleX(1)";
  };

  // Returning TextBar.js
  return (
    <section className="textSection">
      <div className="textBar">
        <input
          type="text"
          placeholder="Enter text..."
          className="inputBar"
          onChange={(e) => setUserPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="messageButton" onClick={() => generateImage()}>
          <img src="/message.png" alt="" className="message" />
        </button>
      </div>
      <div className="generateImage">
        {loading ? (
          <div className="reactSpinner">
            <PacmanLoader size={40} color="#36D6B7" />
            <audio src="./loading-audio.mp3" autoPlay loop />
          </div>
        ) : imageUrl ? (
          <img src={imageUrl} className="image" id="genImage" alt="AI Thing" />
        ) : (
          <img
            src="/no-connection.png"
            className="image"
            alt="no-connection"
            height={30}
            width={30}
          />
        )}
      </div>
      <div className="btnDiv">
        <button className="btn" id="rotateBtn" onClick={rotate}>
          Rotate
        </button>
        <button className="btn" onClick={zoomOut}>
          Zoom-Out
        </button>
        <button className="btn" onClick={reflect}>
          Reflect
        </button>
      </div>
    </section>
  );
};

export default Textbar;
