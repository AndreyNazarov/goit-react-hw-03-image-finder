import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import OnLoader from './components/Loader/Loader';
import axios from 'axios';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    this.state.currentPage > 1 && this.scroll();
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const url = `https://pixabay.com/api/?key=18984105-6f1a9ca3b34d6e222fa727017&q=${this.state.searchQuery}&page=${this.state.currentPage}&image_type=photo&orientation=horizontal&per_page=12`;
    this.setState({ isLoading: true });

    axios
      .get(url)
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && !this.state.isLoading && (
          <Button onClick={this.fetchImages} />
        )}

        {this.state.isLoading && <OnLoader />}
      </>
    );
  }
}

export default App;
