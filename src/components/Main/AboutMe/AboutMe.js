function AboutMe() {
  return (
    <section className='aboutme'>
      <h3 className='aboutme__title'>Студент</h3>
      <div className='aboutme__text-container'>
        <h2 className='aboutme___name'>Алан</h2>
        <p className='aboutme__info'>Фронтренд-разработчик, 27 лет</p>
        <p className='aboutme__bio'>
          Я родом из Северной Осетии-Алании, но последние 16 лет живу в Москве, закончил факультет государственного и муниципального управления РАНХиГС.
          В свободное время люблю почитать художественную или научную литературу.
          Недавно начал кодить, прошел курс Яндекс Практикума по веб-разработке.
          Я активно ищу работу как оффлайн (офис), так и удаленку. Готов зацепиться за любую возможность и приложить все усилия
          для своего профессионального и карьерного роста в ближайшие годы.
          Самая главная причина, по которой мой выбор пал на веб - это возможность реализовать себя,
          свой профессиональный рост в интересной и передовой области. Также приятно осознавать, что постоянно осваиваешь что-то новое
          и можешь реализовать это напрактике.
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
            href='https://github.com/alanpain08'
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
