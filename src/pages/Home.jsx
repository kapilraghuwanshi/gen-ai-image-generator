import React, { useState, useEffect } from "react";
import ImageBox from "../components/ImageBox";
import RecentResults from "../components/RecentResults";
import NavBar from "../components/NavBar";
import { fetchImages } from "../services/model-api";
import { getRandom } from "../utilities/utils";

const promptIdeas = [
  "calico cat wearing a cosmonaut suit, 3d render, pixar style, 8k, high resolution",
  "An armchair in the shape of an avocado  3d render, pixar style, 8k, high resolution",
  "A 3D render of an astronaut walking in a green desert",
  "An abstract oil painting of a river",
  "A Shiba Inu dog wearing a beret and black",
  "Enchanted Forest",
  "Underwater Paradise",
  "City of Tomorrow",
];

const loaderMessages = [
  "Stable Diffusion is a type of latent diffusion model that can generate images from text.",
  "Generative AI (GenAI) is a type of Artificial Intelligence that can create a wide variety of data, such as images, videos, audio, text, and 3D models.",
  "Artificial intelligence is intelligence demonstrated by machines, as opposed to intelligence displayed by humans or by other animals.",
  "Deep learning is part of a broader family of machine learning methods, which is based on artificial neural networks with representation learning. ",
];

const Home = () => {
  const [imageResult, setImageResult] = useState("");
  const [promptQuery, setPromptQuery] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  // const [loaderMessage, setLoaderMessage] = useState(loaderMessages[0]);

  // setInterval(() => {
  //   setLoaderMessage(getRandom(loaderMessages));
  // }, 5000);

  const handleSearch = (event) => {
    setPromptQuery(event.target.value);
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    console.log("Generate 👉️", promptQuery);
    fetchData();
  };

  const fetchData = async () => {
    try {
      console.log("promptQuery", promptQuery);
      setShowLoader(true);

      const imageBlob = await fetchImages(promptQuery);

      const fileReaderInstance = new FileReader();
      fileReaderInstance.onload = () => {
        let base64data = fileReaderInstance.result;
        // console.log("base64data image", base64data);
        setImageResult(base64data);
      };
      fileReaderInstance.readAsDataURL(imageBlob);
      setShowLoader(false);
    } catch (error) {
      // Handle error
      console.error("Error fetching images from API:", error);
      setShowLoader(false);
    }
  };

  const handleSurpriseMe = (e) => {
    const surprisePrompt = getRandom(promptIdeas);
    setPromptQuery(surprisePrompt);
  };

  return (
    <div className="">
      <NavBar />
      <div className="surpriseBox">
        <label className="promptLabel">
          Bring your imaginations into reality!
        </label>
      </div>
      <div>
        <input
          type="text"
          id="prompt"
          value={promptQuery}
          onChange={handleSearch}
          placeholder="A plush toy robot sitting against a yellow wall"
          className="promptInput"
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <div>
        <button onClick={handleSurpriseMe}>Surprise Me</button>
      </div>
      {/* <div className="slideShowMessage">{loaderMessage}</div> */}

      {showLoader ? (
        <div style={{ margin: 40 }}>Loading...</div>
      ) : (
        <>
          <ImageBox promptQuery={promptQuery} imageResult={imageResult} />
        </>
      )}
      {/* <RecentResults promptQuery={promptQuery} imageResult={imageResult} /> */}
    </div>
  );
};

export default Home;
