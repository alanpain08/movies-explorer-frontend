function Portfolio() {
  return (
    <section className='portfolio'>
      <p className='portfolio__label'>Портфолио</p>
      <ul className='portfolio__nav'>
        <li className='portfolio__link-li'>
          <a className='portfolio__link' href='github.com' target='_blank'>
            <p className='portfolio__link-text'>Статичный сайт</p>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-li'>
        <a className='portfolio__link' href='github.com' target='_blank'>
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-li'>
        <a className='portfolio__link' href='github.com' target='_blank'>
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
