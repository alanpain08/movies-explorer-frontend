import { API_CONFIG } from './constants';

class MainApi {
  constructor({ adress, headers }) {
    this._adress = adress;
    this._headers = headers;
  }

  _checkServerAnswer(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._adress}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkServerAnswer(res));
  }

  editUserInfo({ name, email }) {
    return fetch(`${this._adress}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this._checkServerAnswer(res));
  }

  getSavedMovies() {
    return fetch(`${this._adress}/movies`, {
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkServerAnswer(res));
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  }) {
    return fetch(`${this._adress}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailer: trailerLink,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
      }),
      credentials: 'include',
    }).then((res) => this._checkServerAnswer(res));
  }

  deleteMovie(movieID) {
    return fetch(`${this._adress}/movies/${movieID}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkServerAnswer(res));
  }
}

export const mainApi = new MainApi(API_CONFIG);
