import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isSaved, setIsSaved] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
          </Route>

          <Route path='/movies' element={<Layout />}>
            <Route index element={<ProtectedRoute loggedIn={loggedIn} isSaved={isSaved} isLoading={isLoading} >
              <Movies {...{ isSaved, isLoading }} />
            </ProtectedRoute>} />
          </Route>

          <Route path='/saved-movies' element={<Layout />}>
            <Route index element={<ProtectedRoute loggedIn={loggedIn} isSaved={isSaved} isLoading={isLoading} >
              <SavedMovies {...{ isLoading }} />
            </ProtectedRoute>} />
          </Route>

          <Route path='/profile' element={<LayoutProfile />}>
            <Route index element={<Profile />} />
          </Route>

          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
