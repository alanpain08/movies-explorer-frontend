function AboutMe() {
  return (
    <section className='aboutme'>
      <h3 className='aboutme__title'>Студент</h3>
      <div className='aboutme__text-container'>
        <h2 className='aboutme___name'>Алан</h2>
        <p className='aboutme__info'>Фронтренд-разработчик, 26 лет</p>
        <p className='aboutme__bio'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <nav className='aboutme__link-container'>
          <a
            className='aboutme__link'
            href='https://www.facebook.com'
            target='_blank'
            title='ссылка на facebook'
            rel='noreferrer'
          >
            Facebook
          </a>
          <a
            className='aboutme__link'
            href='https://github.com/'
            target='_blank'
            title='ссылка на github'
            rel='noreferrer'
          >
            Github
          </a>
        </nav>
      </div>
      <div className='aboutme__photo-container'></div>
    </section>
  );
}

export default AboutMe;
