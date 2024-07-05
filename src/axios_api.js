import axios from 'axios';

function mapUnsplashObj(unsplashArr) {
  unsplashArr = unsplashArr.map((obj, index) => {
    return {
      desc: obj?.['alt_description'],
      link: obj?.['urls']?.['small'],
    };
  });
  return unsplashArr;
}

/**
 *
 * @param {string} query what photo you want to search for
 * @returns
 */
export async function getImagesByQuery(query) {
  try {
    const result = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID V1sTx-zCng89lzmTzdAjwyG0TvLPDavs-qcBzXPz3c4`,
      },
      params: {
        query,
      },
    });
    return mapUnsplashObj(result.data.results);
  } catch (error) {
    console.log('failed get req to unsplash');
    throw error;
  }
}
