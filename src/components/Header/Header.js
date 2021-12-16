import headerLogo from '../../images/headerLogo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header() {
  let location = useLocation();

  const isMobileDevice = useMediaQuery({
    query: "(min-width: 320px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(max-width: 770px)",
  });

  return (
    <header
      className={`${location.pathname === '/' ? 'header' : 'header header__logged'
        }`}
    >
      <Link to='/'>
        <img src={headerLogo} alt='логотип страницы' className='header__logo' />
      </Link>

      <div
        className={`${location.pathname === '/'
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
        ) : ((isTabletDevice && isMobileDevice) ? <BurgerMenu /> : (<>
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
        </>)

        )}
      </div>
    </header>
  );
}

export default Header;
