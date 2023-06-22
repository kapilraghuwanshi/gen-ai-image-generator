import React, { useState, useEffect } from "react";
import ImageBox from "../components/ImageBox";
import RecentResults from "../components/RecentResults";
import NavBar from "../components/NavBar";
import { fetchImages } from "../services/model-api";

const Home = () => {
  const [imageResult, setImageResult] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages(searchQuery);
        setImageResult(data);
      } catch (error) {
        // Handle error
        console.error("Error fetching images from API:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
  return (
    <div className="">
      <NavBar />
      <div>
        <input type="text" />
        <button onClick={handleSearch}>Generate</button>
      </div>
      <ImageBox imageResult={imageResult}/>
      <RecentResults imageResult={imageResult}/>
    </div>
  );
};

export default Home;
