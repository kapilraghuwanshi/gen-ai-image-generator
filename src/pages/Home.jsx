import React, { useState, useEffect } from "react";
import ImageBox from "../components/ImageBox";
import NavBar from "../components/NavBar";
import { fetchImages } from "../services/model-api";
import { getRandom, loaderMessages, promptIdeas } from "../utilities/utils";
import ChooseResults from "../components/ChooseResults";
import RecentResults from "../components/RecentResults";

const Home = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [imageResult, setImageResult] = useState("");
  const [promptQuery, setPromptQuery] = useState("");
  const [radioValue, setRadioValue] = useState("20");
  const [dropDownValue, setDropDownValue] = useState("DDIM");
  const [seedValue, setSeedValue] = useState(17123564234);
  const [loaderMessage, setLoaderMessage] = useState(loaderMessages[0]);

  useEffect(() => {
    const loaderInterval = setInterval(() => {
      setLoaderMessage(getRandom(loaderMessages));
    }, 3000);
    return () => {
      clearInterval(loaderInterval);
    };
  }, [loaderMessage]);

  const handleSearch = (event) => {
    setPromptQuery(event.target.value);
  };

  const handleChange = (event) => {
    if (event.target.name === "radio") {
      setRadioValue(event.target.value);
    } else if (event.target.name === "dropdown") {
      setDropDownValue(event.target.value);
    } else {
      setSeedValue(event.target.value);
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    //console.log("Generate 👉️", promptQuery);
    fetchData();
  };

  const fetchData = async () => {
    try {
      setShowLoader(true);

      const imageBlob = await fetchImages(
        promptQuery,
        seedValue,
        dropDownValue,
        radioValue
      );

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

  const handleAvailOptions = (option) => {
    setPromptQuery(option);
  };

  return (
    <div className="">
      <NavBar />
      <div className="surpriseBox">
        <label className="">Bring your imaginations into reality!</label>
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
        <button onClick={handleSurpriseMe}>Surprise Me</button>
      </div>
      <div className="formBox">
        <div className="formValue">
          <label>Scheduler &nbsp;</label>
          <select name="dropdown" value={dropDownValue} onChange={handleChange}>
            <option value="Euler">Euler</option>
            <option value="LMS">LMS</option>
            <option value="Heun">Heun</option>
            <option value="DDPM">DDPM</option>
          </select>
        </div>
        <div className="formValue">
          Steps
          <label>
            <input
              type="radio"
              name="radio"
              value="20"
              checked={radioValue === "20"}
              onChange={handleChange}
            />
            20
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="30"
              onChange={handleChange}
            />
            30
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="50"
              onChange={handleChange}
            />
            50
          </label>
        </div>
        <div className="formValue">
          <label>Seed &nbsp;</label>
          <input
            type="number"
            name="input"
            value={seedValue}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button onClick={handleGenerate}>Generate the Image</button>
      </div>

      {showLoader ? (
        <div style={{ margin: 40 }}>Loading...</div>
      ) : (
        <>
          <ImageBox promptQuery={promptQuery} imageResult={imageResult} />
        </>
      )}
      <ChooseResults onSelect={handleAvailOptions} />
      <RecentResults promptQuery={promptQuery} imageResult={imageResult} />
      <div className="slideShowMessage">{loaderMessage}</div>
      <div className="footer">Powered by SegMind</div>
    </div>
  );
};

export default Home;
