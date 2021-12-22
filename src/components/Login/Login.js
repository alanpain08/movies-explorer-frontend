import { Link } from 'react-router-dom';
import { useState } from 'react';
import headerLogo from '../../images/headerLogo.svg';

function Login({ handleSubmitLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitLogin(email, password);
  }

  return (
    <section className='login'>
      <div className='login__container'>
        <div className='login__header'>
          <Link to='/'>
            <img
              src={headerLogo}
              alt='логотип'
              className='login__header-logo'
            />
          </Link>
          <h1 className='login__header-title'>Рады видеть!</h1>
        </div>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className='login__form-li'>
            <p className='login__form-input-label'>E-mail</p>
            <input
              type='email'
              onChange={handleChangeEmail}
              value={email}
              className='login__form-input'
              required
            />
            <span className='login__form-input-error'></span>
          </div>
          <div className='login__form-li'>
            <p className='login__form-input-label'>Пароль</p>
            <input
              type='password'
              className='login__form-input'
              required
              onChange={handleChangePassword}
              value={password}
            />
            <span className='login__form-input-error'></span>
          </div>
          <button type='submit' className='login__form-button'>
            Войти
          </button>
        </form>
        <div className='login__link-container'>
          <p className='login__link-container-text'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='login__link-container-signup'>
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
