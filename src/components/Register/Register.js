import { Link } from 'react-router-dom';
import { useState } from 'react';
import headerLogo from '../../images/headerLogo.svg';

function Register({ handleSubmitRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitRegister(name, email, password);
  }
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
        <form className='register__form' onSubmit={handleSubmit}>
          <div className='register__form-li'>
            <p className='register__form-input-label'>Имя</p>
            <input
              onChange={handleChangeName}
              value={name}
              type='text'
              className='register__form-input'
              required
            />
            <span className='register__form-input-error'></span>
          </div>
          <div className='register__form-li'>
            <p className='register__form-input-label'>E-mail</p>
            <input
              onChange={handleChangeEmail}
              value={email}
              type='email'
              className='register__form-input'
              required
            />
            <span className='register__form-input-error'></span>
          </div>
          <div className='register__form-li'>
            <p className='register__form-input-label'>Пароль</p>
            <input
              onChange={handleChangePassword}
              value={password}
              type='password'
              className='register__form-input'
              required />
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
