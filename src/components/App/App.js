import { Routes, Route } from 'react-router';
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

function App() {
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
        <Route path='/signin' element={<Login />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
