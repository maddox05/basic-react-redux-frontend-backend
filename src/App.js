import React, { useState } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import { getImagesByQuery } from './axios_api.js';
import SearchBar from './components/SearchBar.js';
import ImageList from './components/ImageList.js';

export default function App() {
  const [apiList, setApiList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function handleSearchBarSubmit(value) {
    setLoading(true);
    console.log('laoding');
    setApiList([...apiList, ...(await getImagesByQuery(value))]);
    setLoading(false);
    console.log('done');
  }
  return (
    <Segment>
      <SearchBar handleSubmit={handleSearchBarSubmit} />
      <Segment basic loading={isLoading}>
        <ImageList objList={apiList}></ImageList>
      </Segment>
    </Segment>
  );
}
