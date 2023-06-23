import React, { useState, useEffect } from "react";
import ImageBox from "../components/ImageBox";
import RecentResults from "../components/RecentResults";
import NavBar from "../components/NavBar";
import { fetchImages } from "../services/model-api";

const Home = () => {
  const [imageResult, setImageResult] = useState(null);
  const [promptQuery, setPromptQuery] = useState("");

  const promptIdeas = [
    "calico cat wearing a cosmonaut suit, 3d render, pixar style, 8k, high resolution",
    "An armchair in the shape of an avocado  3d render, pixar style, 8k, high resolution",
    "A 3D render of an astronaut walking in a green desert",
    "An abstract oil painting of a river",
    "A Shiba Inu dog wearing a beret and black",
  ];

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
      const imageBlob = await fetchImages(promptQuery);

      const fileReaderInstance = new FileReader();
      fileReaderInstance.onload = () => {
        let base64data = fileReaderInstance.result;
        // console.log("base64data image", base64data);
        setImageResult(base64data);
      };
      fileReaderInstance.readAsDataURL(imageBlob);

    } catch (error) {
      // Handle error
      console.error("Error fetching images from API:", error);
    }
  };

  const handleSurpriseMe = (e) => {
    const surprisePrompt = getRandom(promptIdeas);
    setPromptQuery(surprisePrompt);
  };

  return (
    <div className="">
      <NavBar />
      <div>
        <button onClick={handleSurpriseMe}>Surprise Me</button>
      </div>
      <div>
        <input
          type="text"
          id="prompt"
          value={promptQuery}
          onChange={handleSearch}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <img src={imageResult} width='500' height='200' alt="Image" />
      <ImageBox imageResult={imageResult} />
      <RecentResults imageResult={imageResult} />
    </div>
  );
};

export default Home;

export const getRandom = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};
