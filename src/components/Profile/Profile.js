function Profile({currentUser, signOut}) {
  return (
    <section className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
          <div className='profile__form-li'>
            <p className='profile__form-input-label'>Имя</p>
            <input
              type='text'
              placeholder={currentUser.name}
              className='profile__form-input'
              required
              disabled
            />
          </div>
          <div className='profile__form-li'>
            <p className='profile__form-input-label'>E-mail</p>
            <input
              type='email'
              placeholder={currentUser.email}
              className='profile__form-input'
              required
              disabled
            />
          </div>

          <button type='submit' className='profile__button'>
            Редактировать
          </button>
          <button
            type='button'
            className='profile__button profile__button_logout'
            onClick={signOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </div>
    </section>
  );
}

export default Profile;
