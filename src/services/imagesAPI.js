import axios from 'axios';
const keyApi = '18984105-6f1a9ca3b34d6e222fa727017';
const basicURL = 'https://pixabay.com/api/';

axios.defaults.baseURL = basicURL;
axios.defaults.params = {
  key: keyApi,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = ({ currentPage = 1, searchQuery = '' }) => {
  return axios
    .get('', { params: { currentPage, searchQuery } })
    .then(res => res.data.hits);
};

export default { fetchImages };
