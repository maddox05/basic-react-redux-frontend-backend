import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

import { getImagesByQuery } from './axios_api.js';
import SearchBar from './components/SearchBar.js';
import ImageList from './components/ImageList.js';

export default function App() {
  const [apiList, setApiList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function handleSearchBarSubmit(value) {
    setLoading(true);
    setApiList([...apiList, ...(await getImagesByQuery(value))]);
    setLoading(false);
  }
  return (
    <Segment>
      <SearchBar onSubmit={handleSearchBarSubmit} />
      <Segment basic loading={isLoading}>
        <ImageList objList={apiList}></ImageList>
      </Segment>
    </Segment>
  );
}
