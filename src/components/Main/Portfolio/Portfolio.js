function Portfolio() {
  return (
    <section className='portfolio'>
      <p className='portfolio__label'>Портфолио</p>
      <ul className='portfolio__nav'>
        <li className='portfolio__link-li'>
          <a className='portfolio__link' href='https://github.com/alanpain08/how-to-learn' target='_blank' rel="noreferrer">
            <h2 className='portfolio__link-text'>Статичный сайт</h2>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-li'>
          <a className='portfolio__link' href='https://github.com/alanpain08/russian-travel' target='_blank' rel="noreferrer">
            <h2 className='portfolio__link-text'>Адаптивный сайт</h2>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-li'>
          <a className='portfolio__link' href='https://github.com/alanpain08/react-mesto-api-full' target='_blank' rel="noreferrer">
            <h2 className='portfolio__link-text'>Одностраничное приложение</h2>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
