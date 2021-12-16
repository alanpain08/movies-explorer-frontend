import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoreButton from './MoreButton/MoreButton';

function Movies(props) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList isSaved={props.isSaved} />
      <MoreButton />
    </main>
  );
}

export default Movies;
