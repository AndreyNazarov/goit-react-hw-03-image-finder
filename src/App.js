import './App.css';
import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import OnLoader from './components/Loader/Loader';
import imagesAPI from './services/imagesAPI';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchImages = () => {
      setIsLoading(true);

      imagesAPI({ currentPage, setSearchQuery: searchQuery })
        .then(res => {
          setImages(prevState => [...prevState, ...res]);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    };
    fetchImages();
  }, [currentPage, searchQuery]);

  const updatePage = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setImages([]);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery images={images} />
      {images.length > 0 && !isLoading && <Button onClick={updatePage} />}

      {isLoading && <OnLoader />}
    </>
  );
};

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchImages();
//     }

//     this.state.currentPage > 1 && this.scroll();
//   }

//   fetchImages = () => {
//     this.setState({ isLoading: true });
//     const { currentPage, searchQuery } = this.state;
//     const options = {
//       currentPage,
//       searchQuery,
//     };
//     imagesAPI
//       .fetchImages(options)
//       .then(hits => {
//         this.setState(prevState => ({
//           images: [...prevState.images, ...hits],
//           currentPage: prevState.currentPage + 1,
//         }));
//       })
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   scroll() {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   }

// }

export default App;
