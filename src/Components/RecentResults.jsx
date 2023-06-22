import React from "react";

const RecentResults = ({ onSelect }) => {

    const handleChange = (event) => {
        onSelect(event.target.value);
      };

      
  return (
  <div className="row">
    <div className="" onClick={handleChange}></div>
  </div>);
};

export default RecentResults;
