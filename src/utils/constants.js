export const API_CONFIG = {
  adress: `http://localhost:3000`,
  headers: {
    'Content-Type': 'application/json',
  },
};

//https://api.minikinopoisk.nomoredomains.rocks

export const BASE_URL = 'http://localhost:3000';

export const BASE_MOVIE_URL = ' https://api.nomoreparties.co/beatfilm-movies';

export const movieHours = (movie) => { return Math.floor(movie.duration / 60) }
export const movieMinutes = (movie) => { return movie.duration % 60 }

export const filteredShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration <= 40);
}
