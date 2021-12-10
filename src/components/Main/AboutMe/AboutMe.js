function AboutMe() {
  return (
    <section className='aboutme'>
      <h3 className='aboutme__title'>Студент</h3>
      <div className='aboutme__text-container'>
        <h3 className='aboutme___name'>Алан</h3>
        <p className='aboutme__info'>Фронтренд-разработчик, 26 лет</p>
        <p className='aboutme__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <div className='aboutme__link-container'>
          <a className='aboutme__link' href='facebook.com' target='_blank' title='ссылка на facebook'>Facebook</a>
          <a className='aboutme__link' href='github.com' target='_blank' title='ссылка на github'>Github</a>
        </div>
        <div className='aboutme__photo-container'></div>
      </div>
    </section>
  )
}

export default AboutMe;
