import { Routes, Route, useNavigate } from 'react-router-dom';
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
  const [isSaved, setIsSaved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  /* useEffect(() => {
     mainAuth.getContent().then((data) => {
       if (data) {
         setLoggedIn(true);
         navigate.push("/movies");
       }
     });
   }, [navigate]); */

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getSavedMovies(), mainApi.getUserInfo()])
        .then(([userMovies, userInfo]) => {
          setCurrentUser(userInfo);
          const ownerCards = userMovies.filter(
            (c) => c.owner === userInfo._id && c
          );
          localStorage.setItem("savedCards", JSON.stringify(ownerCards));
          setMovies(ownerCards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleSubmitLogin(email, password) {
    mainAuth
      .authorize(email, password)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
      });
  }

  function handleSubmitRegister(name, email, password) {
    mainAuth
      .register(name, email, password)
      .then((res) => {
        handleSubmitLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
          </Route>

          <Route path='/movies' element={<Layout />}>
            <Route index element={<ProtectedRoute loggedIn={loggedIn} isSaved={isSaved} isLoading={isLoading} movies={movies} >
              <Movies {...{ isSaved, isLoading, movies }} />
            </ProtectedRoute>} />
          </Route>

          <Route path='/saved-movies' element={<Layout />}>
            <Route index element={<ProtectedRoute loggedIn={loggedIn} isSaved={isSaved} isLoading={isLoading} >
              <SavedMovies {...{ isLoading }} />
            </ProtectedRoute>} />
          </Route>

          <Route path='/profile' element={<LayoutProfile />}>
            <Route index element={<ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
          </Route>

          <Route path='/signup' element={<Register {...{ handleSubmitRegister }} />} />
          <Route path='/signin' element={<Login {...{ handleSubmitLogin }} />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
