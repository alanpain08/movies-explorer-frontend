import promoImage from '../../../images/promoImage.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={promoImage} alt='Промо картинка с главной страницы' />
      </div>
    </section>
  )
};

export default Promo;
