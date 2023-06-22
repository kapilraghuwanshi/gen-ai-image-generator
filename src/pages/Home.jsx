import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import SearchBy from "../components/SearchBy";
import SortBy from "../components/SortBy";
import { fetchImages } from "../services/model-api";

const Home = () => {
  const [imageResult, setImageResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages();
        setMoviesAndTVShows(data);
      } catch (error) {
        // Handle error
        console.error("Error fetching movies and TV shows:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter and sort movies and TV shows based on search query and sort option
  const filteredMoviesAndTVShows = moviesAndTVShows.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <SearchBy onSearch={handleSearch} />
          <SortBy onSort={handleSort} />
          <MovieList moviesAndTVShows={filteredMoviesAndTVShows} />
        </div>
      </div>
    </div>
  );
};

export default Home;
