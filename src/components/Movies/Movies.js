import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

function Movies({
  isLoading,
  movies,
  savedMovies,
  searchMovie,
  notFound,
  setNotFound,
  handleMovieSave,
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
      ? setRenderMovies(filteredShortMovies(movies))
      : setRenderMovies(movies);
  }, [isFiltered, movies]);

  return (
    <main className='movies'>
      <SearchForm {...{ setIsFiltered }} onSearch={searchMovie} />
      <MoviesCardList
        {...{
          isLoading,
          movies,
          savedMovies,
          renderMovies,
          notFound,
          handleMovieSave,
          handleMovieDelete,
        }}
      />
    </main>
  );
}

export default Movies;
