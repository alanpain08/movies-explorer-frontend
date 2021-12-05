import { Routes, Route, Link } from 'react-router';
import { useState } from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: ''
  });

  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
