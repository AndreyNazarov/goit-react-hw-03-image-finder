import axios from 'axios';

const fetchImages = ({ currentPage = 1, searchQuery = '' }) => {
  const url = `https://pixabay.com/api/?key=18984105-6f1a9ca3b34d6e222fa727017&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(url).then(res => res.data.hits);
};

export default { fetchImages };
