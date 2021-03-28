import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChangeInput = e => {
    setQuery(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
};

export default Searchbar;
