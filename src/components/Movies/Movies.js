import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoreButton from './MoreButton/MoreButton';
import Preloader from '../Preloader/Preloader';

function Movies({ isSaved, isLoading }) {
  return (
    <main className='movies'>
      <SearchForm />
      {isLoading ? (<Preloader />) : (
        <>
          <MoviesCardList {...{ isSaved, isLoading }} />
          <MoreButton />
        </>)}
    </main>

  );
}

export default Movies;
