import headerLogo from '../../images/headerLogo.svg';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';

function Header(props) {
  let location = useLocation();

  return (
    <header className={`${location.pathname === '/' ? "header" : "header header__active"}`}>
      <Link to='/' className='header__logo-link'>
        <img src={headerLogo} alt="логотип страницы" className="header__logo" />
      </Link>

      <div className="header__nav">
        <Routes>
          <Route path='/' element={<><Link to='/signup' className="header__text">Регистрация</Link>
            <Link to='/signin'>
              <button className="header__button">
                Войти
              </button>
            </Link>
          </>} />
        </Routes>
      </div>
    </header>
  )
}

export default Header;
