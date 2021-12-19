import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoreButton from '../Movies/MoreButton/MoreButton';

function SavedMovies({ isLoading }) {
  return (
    <main className='saved-movies'>
      <SearchForm />
      {isLoading ? (<Preloader />) : (
        <>
          <MoviesCardList {...{ isLoading }} />
          <MoreButton />
        </>)}
    </main>
  );
}

export default SavedMovies;
