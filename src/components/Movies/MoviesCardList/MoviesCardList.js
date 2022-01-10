import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';
import Preloader from '../../Preloader/Preloader';
import { useState, useEffect } from 'react';

function MoviesCardList({
  isLoading,
  renderMovies,
  savedMovies,
  notFound,
  handleMovieSave,
  handleMovieDelete,
}) {
  const [moviesQuantity, setMoviesQuantity] = useState(12);
  const [moviesAddQuantity, setMoviesAddQuantity] = useState(3);

  function checkWindowWidth() {
    if (window.innerWidth >= 768) {
      setMoviesQuantity(12);
      setMoviesAddQuantity(3);
    }
    if (window.innerWidth <= 768) {
      setMoviesQuantity(8);
      setMoviesAddQuantity(2);
    }
    if (window.innerWidth <= 320) {
      setMoviesQuantity(5);
      setMoviesAddQuantity(2);
    }
  }

  useEffect(() => {
    checkWindowWidth();

    function checkResize() {
      setTimeout(checkWindowWidth, 1000);
    }

    window.addEventListener('resize', checkResize);

    return () => window.removeEventListener('resize', checkResize);
  }, []);

  function handleAddMovie() {
    setMoviesQuantity(moviesQuantity + moviesAddQuantity);
  }

  return (
    <section className='movies-cards'>
      {notFound && renderMovies.length === 0 && (
        <h2 className='movies-cards__not-found'>Ничего не найдено</h2>
      )}
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className='movies-cards__container'>
          {renderMovies &&
            renderMovies
              .slice(0, moviesQuantity)
              .map((movie) => (
                <MoviesCard
                  key={movie.id ? movie.id : movie._id}
                  movie={movie}
                  renderMovies={renderMovies}
                  savedMovies={savedMovies}
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete}
                />
              ))}
        </ul>
      )}
      {renderMovies && moviesQuantity < renderMovies.length && (
        <MoreButton {...{ handleAddMovie }} />
      )}
    </section>
  );
}

export default MoviesCardList;
