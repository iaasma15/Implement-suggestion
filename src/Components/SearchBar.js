import React from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" />
        <div className="searchIcon">
          <PersonSearchIcon />
        </div>
      </div>
      <div className="dataResult"></div>
    </div>
  );
}

export default SearchBar;
