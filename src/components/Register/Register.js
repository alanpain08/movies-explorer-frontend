import { Link } from 'react-router-dom';
import headerLogo from '../../images/headerLogo.svg';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <div className='register__header'>
          <Link to='/'>
            <img
              src={headerLogo}
              alt='логотип'
              className='register__header-logo'
            />
          </Link>
          <h1 className='register__header-title'>Добро пожаловать!</h1>
        </div>
        <form className='register__form'>
          <div className='register__form-li'>
            <p className='register__form-input-label'>Имя</p>
            <input
              type='text'
              defaultValue='Виталий'
              className='register__form-input'
              required
            />
            <span className='register__form-input-error'></span>
          </div>
          <div className='register__form-li'>
            <p className='register__form-input-label'>E-mail</p>
            <input
              type='email'
              defaultValue='pochta@yandex.ru'
              className='register__form-input'
              required
            />
            <span className='register__form-input-error'></span>
          </div>
          <div className='register__form-li'>
            <p className='register__form-input-label'>Пароль</p>
            <input type='password' className='register__form-input' required />
            <span className='register__form-input-error'></span>
          </div>
          <button type='submit' className='register__form-button'>
            Зарегистрироваться
          </button>
        </form>
        <div className='register__link-container'>
          <p className='register__link-container-text'>Уже зарегистрированы?</p>
          <Link to='/signin' className='register__link-container-signin'>
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
