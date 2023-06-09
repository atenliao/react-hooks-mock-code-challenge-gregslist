import React, { useState } from "react";

function Search({onSearch}) {
  const [get, setGet]= useState('')
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(get)
    // onSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={get}
        onChange={(e) => setGet(e.target.value)}

      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
