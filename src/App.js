import React from 'react';
import { useState } from 'react';

import { getImagesByQuery } from './axios_api';

export default function App() {
  const [images, setImages] = useState([]);

  async function handleApiImagesCall() {
    const arr = await getImagesByQuery('dog');
    setImages([
      ...images,
      arr.map((value, index) => {
        return <img key={index} alt={value.desc} src={value.link} style={{ maxWidth: 100 + 'px' }} />;
      }),
    ]);
  }
  return (
    <React.StrictMode>
      <button onClick={handleApiImagesCall}>Click Me chat</button>
      <div>{images}</div>
    </React.StrictMode>
  );
}
