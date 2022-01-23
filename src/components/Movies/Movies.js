import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';
import { filteredShortMovies } from '../../utils/constants';

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

  useEffect(() => {
    renderMovies.length === 0 ? setNotFound(true) : setNotFound(false);
  }, [renderMovies, setNotFound]);

  /*useEffect(() => {
    if (isFiltered) {
      setRenderMovies(filteredShortMovies(movies))
      localStorage.setItem('searchedMovies', JSON.stringify(filteredShortMovies(movies)));
    } else {
      localStorage.setItem('searchedMovies', JSON.stringify(movies));
      setRenderMovies(movies);
    }
    }, [isFiltered, movies, localStorage]);*/

  useEffect(() => {
    isFiltered
      ? setRenderMovies(filteredShortMovies(movies))
      : setRenderMovies(movies);

  }, [isFiltered, movies])

  return (
    <main className='movies'>
      <SearchForm {...{ setIsFiltered, isFiltered }} onSearch={searchMovie} />
      <MoviesCardList
        {...{
          isLoading,
          movies,
          savedMovies,
          renderMovies,
          notFound,
          handleMovieSave,
          handleMovieDelete,
          isFiltered
        }}
      />
    </main>
  );
}

export default Movies;
