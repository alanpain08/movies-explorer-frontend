import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import LayoutProfile from '../LayoutProfile/LayoutProfile';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../hoc/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import * as mainAuth from '../../utils/mainAuth';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [errorInfo, setErrorInfo] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      loggedIn &&
      (
        location.pathname === '/signin' ||
        location.pathname === '/signup')
    ) {
      navigate('/movies');
    }
  }, [navigate, loggedIn, location]);

  useEffect(() => {
    mainAuth.getContent()
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          setCurrentUser(data);
        }
      })
      .catch(() => {
        localStorage.removeItem('searchedMovies');
        localStorage.removeItem('allMovies');
        setLoggedIn(false);
      })
  }, []);

  useEffect(() => {
    const searchedMovies = localStorage.getItem('searchedMovies');
    if (searchedMovies) {
      setMovies(JSON.parse(searchedMovies));
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getSavedMovies(), mainApi.getUserInfo()])
        .then(([userMovies, userInfo]) => {
          setCurrentUser(userInfo);
          const movieOwner = userMovies.filter(
            (m) => m.owner === userInfo._id && m
          );
          localStorage.setItem('savedMovies', JSON.stringify(movieOwner));
          setSavedMovies(movieOwner);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleNotFound(data) {
    data.length === 0 ? setNotFound(true) : setNotFound(false);
  }

  function searchByName(data, query) {
    return data.filter((m) => {
      const name = [m.nameRU, m.nameEN];
      if (name.toString().toLowerCase().includes(query.toLowerCase())) {
        return m
      } else {
        return false
      }
    });
  }

  function searchMovie(query) {
    if (query) {
      if (allMovies.length === 0) {
        setIsLoading(true);
        moviesApi
          .getMoviesContent()
          .then((res) => {
            localStorage.setItem('allMovies', JSON.stringify(res));
            const allMovies = JSON.parse(localStorage.getItem('allMovies'));
            setAllMovies(allMovies);

            const searchedMovies = searchByName(res, query);
            handleNotFound(searchedMovies);
            localStorage.setItem(
              'searchedMovies',
              JSON.stringify(searchedMovies)
            );
            setMovies(searchedMovies);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setIsLoading(false));
      }
      if (allMovies.length !== 0) {
        const searchedMovies = searchByName(allMovies, query);
        handleNotFound(searchedMovies);
        localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies));
        setMovies(searchedMovies);
      }
    }
  }

  function searchSavedMovies(query) {
    if (query) {
      const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
      const searchedMovie = searchByName(savedMovies, query);
      handleNotFound(searchedMovie);
      setSavedMovies(searchedMovie);
    }
  }

  function handleMovieSave(movie) {
    mainApi
      .saveMovie(movie)
      .then((savedNewMovie) => {
        setSavedMovies([...savedMovies, savedNewMovie]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkSavedMovies(user) {
    mainApi
      .getSavedMovies()
      .then((res) => {
        const movieOwner = res.filter((m) => m.owner === user._id && m);
        localStorage.setItem('savedMovies', JSON.stringify(movieOwner));
        setSavedMovies(movieOwner);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieDelete(movie) {
    let deletedMovie = movie;
    deletedMovie = movie._id ? movie : savedMovies.find((m) => m.movieId === movie.id)
    mainApi
      .deleteMovie(deletedMovie._id)
      .then((res) => {
        checkSavedMovies(currentUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUserInfo({ name, email }) {
    setIsLoading(true);
    mainApi
      .editUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSubmitLogin({ email, password }) {
    setIsLoading(true);
    mainAuth
      .authorize({ email, password })
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          setErrorInfo(false);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        setErrorInfo(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSubmitRegister({ name, email, password }) {
    setIsLoading(true);
    mainAuth
      .register({ name, email, password })
      .then((res) => {
        handleSubmitLogin({ email, password });
      })
      .catch((err) => {
        setErrorInfo(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    mainAuth.logout();
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('allMovies');
    setAllMovies([]);
    setMovies([]);
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Layout {...{ loggedIn }} />}>
            <Route index element={<Main />} />
          </Route>

          <Route path='/movies' element={<Layout {...{ loggedIn }} />}>
            <Route
              index
              element={
                <ProtectedRoute {...{ loggedIn }}>
                  <Movies
                    {...{
                      isLoading,
                      movies,
                      savedMovies,
                      searchMovie,
                      notFound,
                      setNotFound,
                      handleMovieSave,
                      handleMovieDelete,
                    }}
                  />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path='/saved-movies' element={<Layout {...{ loggedIn }} />}>
            <Route
              index
              element={
                <ProtectedRoute {...{ loggedIn }}>
                  <SavedMovies
                    {...{
                      isLoading,
                      savedMovies,
                      searchSavedMovies,
                      notFound,
                      setNotFound,
                      handleMovieDelete,
                    }}
                  />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path='/profile' element={<LayoutProfile {...{ loggedIn }} />}>
            <Route
              index
              element={
                <ProtectedRoute {...{ loggedIn }}>
                  <Profile
                    {...{
                      currentUser,
                      signOut,
                      handleUpdateUserInfo,
                      isLoading,
                    }}
                  />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route
            path='/signup'
            element={
              <Register
                {...{
                  handleSubmitRegister,
                  isLoading,
                  errorInfo,
                  setErrorInfo,
                }}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                {...{ handleSubmitLogin, isLoading, errorInfo, setErrorInfo }}
              />
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
