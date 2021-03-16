import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  state = {
    query: '',
  };
  onChangeInput = e => {
    this.setState({ query: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
