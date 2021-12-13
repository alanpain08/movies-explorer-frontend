import { Routes, Route, Link } from 'react-router';
import { useState } from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import LayoutProfile from '../LayoutProfile/LayoutProfile';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
        </Route>

        <Route path='/movies' element={<Layout />}>
          <Route index element={<Movies />} />
        </Route>

        <Route path='/saved-movies' element={<Layout />}>
          <Route index element={<SavedMovies />} />
        </Route>

        <Route path='/profile' element={<LayoutProfile />}>
          <Route index element={<Profile />} />
        </Route>

        <Route path='/signup' element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
