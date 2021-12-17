import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSaved, isLoading }) {
  return (
    <section className='movies-cards'>
      <ul className='movies-cards__container'>
        <MoviesCard isSaved={isSaved} />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>

    </section>
  );
}

export default MoviesCardList;
