export const API_CONFIG = {
  adress: `https://api.minikinopoisk.nomoredomains.rocks`,
  headers: {
    'Content-Type': 'application/json',
  },
};

//

export const BASE_URL = 'https://api.minikinopoisk.nomoredomains.rocks';

export const BASE_MOVIE_URL = ' https://api.nomoreparties.co/beatfilm-movies';

export const movieHours = (movie) => { return Math.floor(movie.duration / 60) }
export const movieMinutes = (movie) => { return movie.duration % 60 }

export const filteredShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration <= 40);
}
