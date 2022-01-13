import useFormWithValidation from '../../utils/formValidation';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from 'react';

function Profile({ currentUser, signOut, handleUpdateUserInfo, isLoading }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    (
      values.name === '' ||
      values.email === '' ||
      !isValid ||
      (values.name === currentUser.name && values.email === currentUser.email)) ? setIsDisabled(true) :
      setIsDisabled(false);
  }, [setIsDisabled, values.name, values.email, isValid, currentUser.name, currentUser.email])


  const handleSubmit = (e) => {
    e.preventDefault();
    !isDisabled && handleUpdateUserInfo(values);
  };

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <div className='profile__form-li'>
                <p className='profile__form-input-label'>Имя</p>
                <input
                  type='text'
                  name='name'
                  placeholder={currentUser.name}
                  className='profile__form-input'
                  onChange={handleChange}
                  value={values.name}
                  required
                />

              </div>
              <span className='profile__form-error'>{errors.name}</span>
              <div className='profile__form-li'>
                <p className='profile__form-input-label'>E-mail</p>
                <input
                  type='email'
                  name='email'
                  placeholder={currentUser.email}
                  className='profile__form-input'
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <span className='profile__form-error'>{errors.email}</span>
              <button
                type='submit'
                onClick={handleSubmit}
                className='profile__button profile__button-submit'
                disabled={isDisabled}
              >
                Редактировать
              </button>
              <button
                type='button'
                className='profile__button profile__button_logout'
                onClick={signOut}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Profile;
