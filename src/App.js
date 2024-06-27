import React from 'react';

import { getImagesByQuery } from './axios_api.js';
import SearchBar from './components/SearchBar.js';

export function handleSearchBarSubmit(term) {
  console.log(term);
  //console.log(await getImagesByQuery(term));
}

export default function App() {
  return (
    <React.StrictMode>
      <SearchBar handleSubmit={handleSearchBarSubmit} />
    </React.StrictMode>
  );
}
