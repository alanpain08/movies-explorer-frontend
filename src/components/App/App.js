import { Routes, Route, Link } from 'react-router';
import { useState } from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className='App'>
      <Routes>
        {!loggedIn ? (
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        ) : (
          <Route path='/movies' element={<Layout />}>
            <Route index element={<Movies />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
