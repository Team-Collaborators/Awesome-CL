import React, { useState } from "react";
import "./SearchBar.scss";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // array of the possible search results, can be fetched else where, once we have it
  const data = [
    { name: "Button", path: "frontend/components/button" },
    {
      name: "Work Schedule Management",
      path: "Backend/Controllers/WorkScheduleManagement",
    },
  ];

  // sets input to search results, then filters accordingly
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    const results = data.filter((data) =>
      data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(results);
  };

  // after clicking on a Link in the search results, clear input (and results)
  const clearSearchBar = () => {
    setSearchInput("");
  };

  return (
    <>
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          className="search-input"
          type="search"
          placeholder="Search components"
          onChange={handleChange}
          value={searchInput}
        />
        {searchInput.length > 0 && (
          <div className="search-results">
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <li>
                  <Link to={data.path} key={index} onClick={clearSearchBar}>
                    {data.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
