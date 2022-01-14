import { useState } from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, setIsFiltered, isFiltered }) {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search ? onSearch(search) : setError('Нужно ввести ключевое слово');
  }

  function hideError() {
    setError('');
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <div className='search__form-container'>
          <input
            className='search__form-input'
            type='text'
            placeholder='Фильм'
            required
            onChange={handleChangeSearch}
            onKeyPress={hideError}
            value={search}
          ></input>
          <button className='search__form-button'></button>
        </div>
      </form>
      <span className='search__form-error'>{!search.value && error}</span>
      <FilterCheckbox {...{ setIsFiltered, isFiltered }} />
    </section>
  );
}

export default SearchForm;
