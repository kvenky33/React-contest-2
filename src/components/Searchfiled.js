import React from "react";
import "./searchfiled.css";
const Searchfiled = ({ handleSearch }) => {
  return (
    <div className="search-field">
      <input
        className="search"
        placeholder="search"
        type="text"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Searchfiled;
