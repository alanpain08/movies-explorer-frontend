import { NavLink, Link } from 'react-router-dom';

function BurgerMenu() {
  return (
    <div className='burger-menu'>
      <input id='menu-toggle' type='checkbox' />
      <label className='menu-btn' htmlFor='menu-toggle'>
        <span></span>
      </label>

      <ul className='menubox'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'menu-item menu-item_active' : 'menu-item'
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              isActive ? 'menu-item menu-item_active' : 'menu-item'
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              isActive ? 'menu-item menu-item_active' : 'menu-item'
            }
          >
            Сохраненные фильмы
          </NavLink>
        </li>
        <li>
          <Link to='/profile'>
            <button className='header__button-profile menu-item__button-profile'>Аккаунт</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
