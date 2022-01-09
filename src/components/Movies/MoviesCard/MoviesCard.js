import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  movie,
  savedMovies,
  handleMovieSave,
  handleMovieDelete,
}) {
  let location = useLocation();

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (savedMovies.some((item) => item.movieId === movie.id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedMovies, movie]);

  function handleClick() {
    if (isSaved) {
      handleMovieDelete(movie);
    }
    if (!isSaved) {
      handleMovieSave(movie);
    }
  }

  function handleDeleteClick() {
    handleMovieDelete(movie);
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__container'>
        <div className='movies-card__container-text'>
          <h3 className='movies-card__title'>{movie.nameRU}</h3>
          <p className='movies-card__timing'>
            {Math.floor(movie.duration / 60)}ч {movie.duration % 60}м
          </p>
        </div>
        {location.pathname === '/movies' ? (
          <button
            type='button'
            onClick={handleClick}
            className={`${
              isSaved
                ? 'movies-card__button movies-card__button_saved'
                : 'movies-card__button movies-card__button_save'
            }`}
          ></button>
        ) : (
          <button
            type='button'
            onClick={handleDeleteClick}
            className='movies-card__button movies-card__button_delete'
          ></button>
        )}
      </div>
      <a
        href={
          location.pathname === '/movies' ? movie.trailerLink : movie.trailer
        }
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movies-card__img'
          src={
            location.pathname === '/movies'
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          alt='картинка'
        />
      </a>
    </li>
  );
}

export default MoviesCard;
