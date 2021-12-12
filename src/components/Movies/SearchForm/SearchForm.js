import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form' noValidate>
          <div className='search__form-container'>
          <input
          className='search__form-input'
          type='text'
          placeholder='Фильм'
          required
        ></input>
        <button className='search__form-button' type='submit'></button>
          </div>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
