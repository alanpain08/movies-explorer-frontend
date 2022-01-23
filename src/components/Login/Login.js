import { Link } from 'react-router-dom';
import headerLogo from '../../images/headerLogo.svg';
import Preloader from '../Preloader/Preloader';
import useFormWithValidation from '../../utils/formValidation';
import { useEffect, useState } from 'react';

function Login({ handleSubmitLogin, isLoading, errorInfo }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    email: '',
    password: '',
  });

  useEffect(() => {
    values.email === '' ||
    values.password === '' ||
    !isValid
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [setIsDisabled, values.email, values.password, isValid]);

  useEffect(() => {
    if (errorInfo) {
      setErrorMessage('Что-то пошло не так');
    } else {
      setErrorMessage('');
    }
  }, [errorInfo]);

  function hideErrorMessage() {
    setErrorMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    !isDisabled && handleSubmitLogin(values);
  };

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
        <form
          className='login__form'
          onSubmit={handleSubmit}
          onSelect={hideErrorMessage}
        >
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <div className='login__form-li'>
                <p className='login__form-input-label'>E-mail</p>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  value={values.email}
                  className='login__form-input'
                  required
                />
              </div>
              <span className='login__form-error'>{errors.email}</span>
              <div className='login__form-li'>
                <p className='login__form-input-label'>Пароль</p>
                <input
                  type='password'
                  name='password'
                  className='login__form-input'
                  required
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              <span className='login__form-error'>{errors.password}</span>
              <span className='login__form-error'>{errorMessage}</span>
              <button
                type='submit'
                className={`login__form-button ${
                  isDisabled && 'login__form-button_disabled'
                }`}
                disabled={isDisabled}
                onClick={handleSubmit}
              >
                Войти
              </button>
            </>
          )}
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
