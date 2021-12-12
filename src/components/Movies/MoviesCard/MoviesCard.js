import movie from '../../../images/movie.svg';

function MoviesCard() {
    return (
        <li className='movies-card'>
            <div className='movies-card__container'>
            <h3 className='movies-card__title'>dfdf</h3>
            <p className='movies-card__timing'>121</p>
            <button className='movies-card__button-save'></button>
            </div>
            
            <img className='movies-card__img' src={movie} alt='картинка' />
        </li>
    )
};

export default MoviesCard;