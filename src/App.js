import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import axios from 'axios';

class App extends Component {
  state = { images: [], currentPage: 1 };

  onChangeQuery = query => {
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${this.state.currentPage}&
        key=18984105-6f1a9ca3b34d6e222fa727017&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
      </>
    );
  }
}

export default App;
