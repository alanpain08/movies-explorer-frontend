function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__container'>
        <p className='copyright'>&#169; {new Date().getFullYear()}</p>
        <nav className='footer__menu'>
          <a
            className='link footer__menu_link'
            href='https://praktikum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            className='link footer__menu_link'
            href='http://github.com'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
          <a
            className='link footer__menu_link'
            href='http://facebook.com'
            target='_blank'
            rel='noreferrer'
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
