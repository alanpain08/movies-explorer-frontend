import headerLogo from '../../images/headerLogo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
  let location = useLocation();

  return (
    <header
      className={`${
        location.pathname === '/' ? 'header' : 'header header__logged'
      }`}
    >
      <Link to='/'>
        <img src={headerLogo} alt='логотип страницы' className='header__logo' />
      </Link>

      <div
        className={`${
          location.pathname === '/'
            ? 'header__nav'
            : 'header__nav header__nav-logged'
        }`}
      >
        {location.pathname === '/' ? (
          <>
            <Link to='/signup' className='header__link-main'>
              Регистрация
            </Link>
            <Link to='/signin'>
              <button className='header__button-main'>Войти</button>
            </Link>
          </>
        ) : (
          <>
            <nav className='header__movies-nav'>
              <NavLink className='header__movies-link' to='/movies'>
                Фильмы
              </NavLink>
              <NavLink className='header__movies-link' to='/saved-movies'>
                Сохраненные фильмы
              </NavLink>
            </nav>
            <Link to='/profile'>
              <button className='header__button-profile'>Аккаунт</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
