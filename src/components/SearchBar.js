import React, { useState } from 'react';

/**
 *
 * @prop {function} handleSubmit handles the onSubmit for the searchbar
 * @returns {React.JSX} jsx code
 */
export default function SearchBar({ handleSubmit }) {
  const [searchVal, setSearch] = useState('');

  function handleSearchBarChange(event) {
    setSearch(event.target.value);
  }
  return <input placeholder='press enter to search' value={searchVal} onInput={handleSearchBarChange} onSubmit={handleSubmit} />;
}
