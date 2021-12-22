import { BASE_MOVIE_URL } from "./constants";

const checkServerAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Что-то пошло не так: ${res.status}`);
};

export const getMoviesContent = () => {
  return fetch(`${BASE_MOVIE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => checkServerAnswer(res));
};
