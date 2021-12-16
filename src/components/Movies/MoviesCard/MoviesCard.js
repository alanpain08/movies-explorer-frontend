import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  let location = useLocation();



  return (
    <li className='movies-card'>
      <div className='movies-card__container'>
        <div>
          <h3 className='movies-card__title'>33 слова о дизайне</h3>
          <p className='movies-card__timing'>1ч 47м</p>
        </div>
        <button
          className={`${location.pathname === '/movies'
            ? `${props.isSaved ? 'movies-card__button movies-card__button_saved' : 'movies-card__button movies-card__button_save'}`
            : 'movies-card__button movies-card__button_delete'
            }`}
        ></button>
      </div>

      <img className='movies-card__img' src='https://pbs.twimg.com/media/EEaoKjRXUAAI82W.jpg' alt='картинка' />
    </li>
  );
}

export default MoviesCard;
