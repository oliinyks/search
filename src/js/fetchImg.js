const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29451917-11054f18e01d02c62ffb7517a';

import axios from 'axios';
export default async function newApiImg(nameImg, page) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: KEY,
      q: nameImg,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    },
  });
  return response.data;
}
