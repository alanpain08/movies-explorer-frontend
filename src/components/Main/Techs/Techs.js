function Techs() {
  return (
    <section className='techs'>
      <h3 className='techs__title'>Технологии</h3>
      <div className='techs__container'>
        <h3 className='techs__container-title'>7 технологий</h3>
        <p className='techs__container-text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className='techs__stack-container'>
          <div className='techs__stack-icon'>HTML</div>
          <div className='techs__stack-icon'>CSS</div>
          <div className='techs__stack-icon'>JS</div>
          <div className='techs__stack-icon'>React</div>
          <div className='techs__stack-icon'>Git</div>
          <div className='techs__stack-icon'>Express.js</div>
          <div className='techs__stack-icon'>mongoDB</div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
