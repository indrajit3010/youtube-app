import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search a Video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
