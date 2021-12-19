function AboutProject() {
  return (
    <section className='about'>
      <h3 className='about__title'>О проекте</h3>
      <div className='about__container'>
        <p className='about__container-header'>
          Дипломный проект включал 5 этапов
        </p>
        <p className='about__container-header about__container-header_second'>
          На выполнение диплома ушло 5 недель
        </p>
        <p className='about__container-text'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className='about__container-text'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about__visual'>
        <div className='about__visual-quantity'>1 неделя</div>
        <div className='about__visual-quantity'>4 недели</div>
        <p className='about__visual-name'>Back-end</p>
        <p className='about__visual-name'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
