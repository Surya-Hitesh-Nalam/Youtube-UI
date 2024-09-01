import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': 'a197ce416dmsh7aec0e6697e1c14p18d0c6jsnedc49944d76b',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };

