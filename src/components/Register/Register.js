import { Link } from 'react-router-dom';
import headerLogo from '../../images/headerLogo.svg';
import Preloader from '../Preloader/Preloader';
import useFormWithValidation from '../../utils/formValidation';
import { useEffect, useState } from 'react';

function Register({ handleSubmitRegister, isLoading, errorInfo }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    (values.name === '' ||
      values.email === '' ||
      values.password === '' ||
      !isValid) ? setIsDisabled(true) :
      setIsDisabled(false);
  }, [setIsDisabled, values.name, values.email, values.password, isValid])

  useEffect(() => {
    if (errorInfo) {
      setErrorMessage('Что-то пошло не так');
    } else {
      setErrorMessage('')
    }
  }, [errorInfo]);

  function hideErrorMessage() {
    setErrorMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    !isDisabled && handleSubmitRegister(values);
  };
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
        <form className='register__form' onSubmit={handleSubmit} onSelect={hideErrorMessage}>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <div className='register__form-li'>
                <p className='register__form-input-label'>Имя</p>
                <input
                  onChange={handleChange}
                  value={values.name}
                  name='name'
                  type='text'
                  className='register__form-input'
                  required
                />
              </div>
              <span className='register__form-error'>{errors.name}</span>
              <div className='register__form-li'>
                <p className='register__form-input-label'>E-mail</p>
                <input
                  onChange={handleChange}
                  value={values.email}
                  name='email'
                  type='email'
                  className='register__form-input'
                  required
                />
              </div>
              <span className='register__form-error'>{errors.email}</span>
              <div className='register__form-li'>
                <p className='register__form-input-label'>Пароль</p>
                <input
                  onChange={handleChange}
                  value={values.password}
                  name='password'
                  type='password'
                  className='register__form-input'
                  required
                />
              </div>
              <span className='register__form-error'>{errors.password}</span>
              <span className='register__form-error'>{errorMessage}</span>
              <button
                type='submit'
                className={`register__form-button ${isDisabled && 'register__form-button_disabled'
                  }`}
                disabled={isDisabled}
                onClick={handleSubmit}
              >
                Зарегистрироваться
              </button>
            </>
          )}
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
