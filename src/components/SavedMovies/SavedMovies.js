import { useState, useEffect } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({
  isLoading,
  savedMovies,
  searchSavedMovies,
  notFound,
  setNotFound,
  handleMovieDelete,
}) {
  const [renderMovies, setRenderMovies] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  function filteredShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40);
  }

  useEffect(() => {
    renderMovies.length === 0 ? setNotFound(true) : setNotFound(false);
  }, [renderMovies, setNotFound]);

  useEffect(() => {
    isFiltered
      ? setRenderMovies(filteredShortMovies(savedMovies))
      : setRenderMovies(savedMovies);
  }, [isFiltered, savedMovies]);

  return (
    <main className='saved-movies'>
      <SearchForm {...{ setIsFiltered }} onSearch={searchSavedMovies} />
      <MoviesCardList
        {...{
          isLoading,
          savedMovies,
          searchSavedMovies,
          notFound,
          setNotFound,
          handleMovieDelete,
          renderMovies,
        }}
      />
    </main>
  );
}

export default SavedMovies;
